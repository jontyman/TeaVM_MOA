/*
 *    ClassOption.java
 *    Copyright (C) 2007 University of Waikato, Hamilton, New Zealand
 *    @author Richard Kirkby (rkirkby@cs.waikato.ac.nz)
 *
 *    This program is free software; you can redistribute it and/or modify
 *    it under the terms of the GNU General Public License as published by
 *    the Free Software Foundation; either version 3 of the License, or
 *    (at your option) any later version.
 *
 *    This program is distributed in the hope that it will be useful,
 *    but WITHOUT ANY WARRANTY; without even the implied warranty of
 *    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *    GNU General Public License for more details.
 *
 *    You should have received a copy of the GNU General Public License
 *    along with this program. If not, see <http://www.gnu.org/licenses/>.
 *    
 */
package moa.options;

import java.io.File;
import java.util.Arrays;

import com.github.javacliparser.Option;
import com.github.javacliparser.Options;
import moa.tasks.Task;

//Import for hashmap
import java.util.HashMap;
import java.util.Map;

//Import arrays
import java.util.Arrays;
import java.util.ArrayList;

//Import class
import moa.classifiers.trees.HoeffdingTree;
import moa.classifiers.core.attributeclassobservers.NominalAttributeClassObserver;
import moa.classifiers.core.attributeclassobservers.GaussianNumericAttributeClassObserver;
import moa.classifiers.core.splitcriteria.InfoGainSplitCriterion;


import moa.classifiers.core.splitcriteria.GiniSplitCriterion;
import moa.classifiers.core.splitcriteria.InfoGainSplitCriterionMultilabel;
import moa.classifiers.core.splitcriteria.SDRSplitCriterion;
import moa.classifiers.core.splitcriteria.SplitCriterion;
import moa.classifiers.core.splitcriteria.VarianceReductionSplitCriterion;

import moa.classifiers.core.attributeclassobservers.BinaryTreeNumericAttributeClassObserver;
import moa.classifiers.core.attributeclassobservers.AttributeClassObserver;
import moa.classifiers.core.attributeclassobservers.BinaryTreeNumericAttributeClassObserverRegression;
import moa.classifiers.core.attributeclassobservers.DiscreteAttributeClassObserver;
import moa.classifiers.core.attributeclassobservers.FIMTDDNumericAttributeClassObserver;
import moa.classifiers.rules.core.attributeclassobservers.FIMTDDNumericAttributeClassLimitObserver;
//import moa.classifiers.rules.core.splitcriteria.AMRulesSplitCriterion;
import moa.classifiers.rules.core.splitcriteria.SDRSplitCriterionAMRules;
import moa.classifiers.rules.core.splitcriteria.SDRSplitCriterionAMRulesNode;
import moa.classifiers.rules.core.splitcriteria.VarianceRatioSplitCriterion;
import moa.classifiers.rules.core.splitcriteria.VRSplitCriterion;





import moa.classifiers.core.attributeclassobservers.GaussianNumericAttributeClassObserver;
import moa.classifiers.core.attributeclassobservers.GreenwaldKhannaNumericAttributeClassObserver;
import moa.classifiers.core.attributeclassobservers.NullAttributeClassObserver;
import moa.classifiers.core.attributeclassobservers.NumericAttributeClassObserver;
import moa.classifiers.core.attributeclassobservers.NullAttributeClassObserver;
import moa.classifiers.core.attributeclassobservers.VFMLNumericAttributeClassObserver;

import moa.classifiers.trees.iadem.IademVFMLNumericAttributeClassObserver;
import moa.classifiers.trees.iadem.IademGaussianNumericAttributeClassObserver;
import moa.classifiers.trees.iadem.IademGreenwaldKhannaNumericAttributeClassObserver;

import moa.classifiers.core.driftdetection.ADWINChangeDetector;


















/**
 * Class option.
 *
 * @author Richard Kirkby (rkirkby@cs.waikato.ac.nz)
 * @version $Revision: 7 $
 */
public class ClassOption extends AbstractClassOption {

    private static final long serialVersionUID = 1L;
	
	public static Map<String,Class<?>> app = new HashMap<String,Class<?>>(){{
	  put("trees.HoeffdingTree", HoeffdingTree.class);
	  put("NominalAttributeClassObserver", NominalAttributeClassObserver.class);
	  put("GaussianNumericAttributeClassObserver", GaussianNumericAttributeClassObserver.class);
	  put("InfoGainSplitCriterion",InfoGainSplitCriterion.class);
	  put("BinaryTreeNumericAttributeClassObserver", BinaryTreeNumericAttributeClassObserver.class);
	  put("BinaryTreeNumericAttributeClassObserverRegression", BinaryTreeNumericAttributeClassObserverRegression.class);
	  put("FIMTDDNumericAttributeClassObserver", FIMTDDNumericAttributeClassObserver.class);
	  put("FIMTDDNumericAttributeClassLimitObserver", FIMTDDNumericAttributeClassLimitObserver.class);
	  put("VFMLNumericAttributeClassObserver", VFMLNumericAttributeClassObserver.class);
	  put("IademGaussianNumericAttributeClassObserver", IademGaussianNumericAttributeClassObserver.class);
	  put("IademGreenwaldKhannaNumericAttributeClassObserver", IademGreenwaldKhannaNumericAttributeClassObserver.class);
	  put("IademVFMLNumericAttributeClassObserver", IademVFMLNumericAttributeClassObserver.class);	  
	  put("GiniSplitCriterion", GiniSplitCriterion.class);	  
	  put("InfoGainSplitCriterion", InfoGainSplitCriterion.class);	  
	  put("InfoGainSplitCriterionMultilabel", InfoGainSplitCriterionMultilabel.class);	  
	  put("SDRSplitCriterion", SDRSplitCriterion.class);	
	  /*put("AMRulesSplitCriterion", AMRulesSplitCriterion.class);*/
	  put("SDRSplitCriterionAMRules", SDRSplitCriterionAMRules.class);
	  put("SDRSplitCriterionAMRulesNode", SDRSplitCriterionAMRulesNode.class);	  
	  put("VarianceReductionSplitCriterion", VarianceReductionSplitCriterion.class);
	  put("VarianceRatioSplitCriterion", VarianceRatioSplitCriterion.class);
	  put("VRSplitCriterion", VRSplitCriterion.class);
	  put("ADWINChangeDetector", ADWINChangeDetector.class);
	}};
	
	public static ArrayList<String> getListClasses(Class<?> requiredType){
		
		 ArrayList<String> listClasses = new ArrayList<>();
		 
	for (Map.Entry<String, Class<?>> entry : app.entrySet()) {
			 if(requiredType.isAssignableFrom(entry.getValue())){
				 //System.out.println(entry.getKey())
				 listClasses.add(entry.getKey());
			 }
				 

		}
		
		return listClasses;
		
	}
	
	public ArrayList<String> getListClasses(){
		
		 ArrayList<String> listClasses = new ArrayList<>();
		 
	for (Map.Entry<String, Class<?>> entry : app.entrySet()) {
			 if(this.requiredType.isAssignableFrom(entry.getValue())){
				 //System.out.println(entry.getKey())
				 listClasses.add(entry.getKey());
			 }
				 

		}
		
		return listClasses;
		
	}
	
	public static void helloWorld(){
		System.out.println("Hello World");
	}

    public ClassOption(String name, char cliChar, String purpose,
            Class<?> requiredType, String defaultCLIString) {
        super(name, cliChar, purpose, requiredType, defaultCLIString);
    }

    public ClassOption(String name, char cliChar, String purpose,
            Class<?> requiredType, String defaultCLIString, String nullString) {
        super(name, cliChar, purpose, requiredType, defaultCLIString, nullString);
    }

    @Override
    public String getValueAsCLIString() {
        if ((this.currentValue == null) && (this.nullString != null)) {
            return this.nullString;
        }
        return objectToCLIString(this.currentValue, this.requiredType);
    }

    @Override
    public void setValueViaCLIString(String s) {
        if ((this.nullString != null)
                && ((s == null) || (s.length() == 0) || s.equals(this.nullString))) {
            this.currentValue = null;
        } else {
			System.out.println("String S is: " + s + " Required type is: " +  this.requiredType.getName());            
			try {

                this.currentValue = cliStringToObject(s, this.requiredType,
                        null); // null);
            } catch (Exception e) {
                throw new IllegalArgumentException("Problems with option: " + getName() + "Error: " + e.getMessage(), e);
            }
        }
    }

    public static String objectToCLIString(Object obj, Class<?> requiredType) {
        if (obj == null) {
            return "";
        }
        if (obj instanceof File) {
			System.out.println("objectToCLIString Is file");
            return (FILE_PREFIX_STRING + ((File) obj).getPath());
        }
        if (obj instanceof String) {
			System.out.println("objectToCLIString Is string");
            return (INMEM_PREFIX_STRING + obj);
        }
        String className = classToCLIString(obj.getClass(), requiredType);
		System.out.println("className is " + className);
        if (obj instanceof OptionHandler) {
			System.out.println("objectToCLIString Is an optionhandler");
            String subOptions = ((OptionHandler) obj).getOptions().getAsCLIString();
            if (subOptions.length() > 0) {
                return (className + " " + subOptions);
            }
        }
        return className;
    }

    public static Class<?> classForName(
          String className,
          String[] additionalPackagesToSearch
    ) throws Exception {
        try {
            return Class.forName(className);
        } catch (Throwable ignored1) {
            for (String packageName: additionalPackagesToSearch) {
                try {
                    return Class.forName(packageName + "." + className);
                } catch (Throwable ignored2) {}
            }
        }

        throw new Exception("Class not found: " + className);
    }

    public static Object cliStringToObject(
          String cliString,
          Class<?> requiredType,
          Option[] externalOptions,
          String... additionalPackagesToSearch
    ) throws Exception {
        if (cliString.startsWith(FILE_PREFIX_STRING)) {
            return new File(cliString.substring(FILE_PREFIX_STRING.length()));
        }
        if (cliString.startsWith(INMEM_PREFIX_STRING)) {
            return cliString.substring(INMEM_PREFIX_STRING.length());
        }

        cliString = cliString.trim();
        String className;
        String classOptions;
		
		// indexOf(' ', 0) finds index of first space character. Trim removes leading and ending whitespaces
        int firstSpaceIndex = cliString.indexOf(' ', 0);
        if (firstSpaceIndex > 0) {
            className = cliString.substring(0, firstSpaceIndex);
            classOptions = cliString.substring(firstSpaceIndex + 1);
            classOptions = classOptions.trim();
        } else {
            className = cliString;
            classOptions = "";
        }

        // Add the required type's package and the tasks package into the search space
        additionalPackagesToSearch = Arrays.copyOf(additionalPackagesToSearch, additionalPackagesToSearch.length + 2);
        additionalPackagesToSearch[additionalPackagesToSearch.length - 2] = requiredType.getPackage().getName();
        additionalPackagesToSearch[additionalPackagesToSearch.length - 1] = Task.class.getPackage().getName();

        //Class<?> classObject = classForName(className, additionalPackagesToSearch);
	  //Class<?> classObject = app.get(className);
	  
	 
	  
	  //System.out.println("Class name variable is:" + className ); //e.g for Hoeffdinf Tree default for numericEstimatorOption is "GaussianNumericAttributeClassObserver"
	  
	  Class<?> classObject = app.get(className);
	  
	  if(classObject==null){
		  throw new RuntimeException("Unknown class name: " + className);

	  }
	  
	  // TEST if not null. If not null get output like "moa.classifiers.core.attributeclassobservers.NominalAttributeClassObserver"
	  if(classObject!=null){
		  System.out.println("class<?> classObject class name is: " + classObject.getName());
	  }
	  
	  Object classInstance = new Object();
	  
	  Object classInstance2 = new Object();

	 // Clear try catch temporarily to see what functions work
	   try{
		
             classInstance2 = classObject.newInstance();
            }
            catch (Exception ex){
				            throw new Exception("Problem creating instance of class: " + className, ex);
            }
	
		// Should call getDescription of class (method overriden from AbstractMOAObject) 
        System.out.println("classInstance2 class name is " + classInstance2.toString());
		
        /*try {
            classInstance = classObject.newInstance();
        } catch (Exception ex) {
            throw new Exception("Problem creating instance of class: " + className, ex);
        }*/

        // classInstance must either be a value of the required type, or a task
        // which results in a value assignable to the required type
        /*if (!requiredType.isInstance(classInstance)) {
            if (!(classInstance instanceof Task) || !requiredType.isAssignableFrom(((Task) classInstance).getTaskResultType())) {
                throw new Exception(
                      "Class named '" + className + "' is not an instance of " + requiredType.getName() + "."
                );
            }
        }*/

        Options options = new Options();

        if (externalOptions != null) {
			System.out.println("External options found");
            for (Option option : externalOptions) {
                options.addOption(option);
            }
        }
		
		// No external options for setViaCLIString default first iteration
		if(externalOptions==null){
			System.out.println("No external options");

		}

        /*if (classInstance instanceof OptionHandler) {
            Option[] objectOptions = ((OptionHandler) classInstance).getOptions().getOptionArray();

            for (Option option : objectOptions) {
                options.addOption(option);
            }
        }*/
		
		// TEST If to check classInstance not an option handler
		
		 if (classInstance2 instanceof OptionHandler) {
			 			System.out.println("Class Instance 2 is an option handler");
            //Option[] objectOptions = ((OptionHandler) classInstance).getOptions().getOptionArray();

            //for (Option option : objectOptions) {
            //    options.addOption(option);
            //}
        }else{
			System.out.println("Class Instance 2 not an option handler");
		}
		
			
			
		/*try {
            options.setViaCLIString(classOptions);
        } catch (Exception ex) {
            throw new Exception(
                  "Problem with options to '"
                  + className
                  + "'."
                  + "\n\nValid options for "
                  + className
                  + ":\n"
                  + ((OptionHandler) classInstance).getOptions().getHelpString()
                  , ex);
        } finally {
            options.removeAllOptions(); // clean up listener refs
        }*/
		
		// Test for class instance 2
        /*try {
            options.setViaCLIString(classOptions);
        } catch (Exception ex) {
            throw new Exception(
                  "Problem with options to '"
                  + className
                  + "'."
                  + "\n\nValid options for "
                  + className
                  + ":\n"
                  + ((OptionHandler) classInstance2).getOptions().getHelpString() // This runs discoverOptionsViaReflection method
                  , ex);
        } finally {
            options.removeAllOptions(); // clean up listener refs
        }*/

        return classInstance2;
    }
	
	public Class <?> getRequiredType(){
		return this.requiredType;
	}

    //@Override
    //public JComponent getEditComponent() {
    //    return new ClassOptionEditComponent(this);
    //}
}
