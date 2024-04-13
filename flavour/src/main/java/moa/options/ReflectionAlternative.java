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
import moa.classifiers.rules.core.splitcriteria.AMRulesSplitCriterion;
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


public class ReflectionAlternative{

public static Map<String,Class<?>> app = new HashMap<String,Class<?>>(){{
	  app.put("HoeffdingTree", HoeffdingTree.class);
	  app.put("NominalAttributeClassObserver", NominalAttributeClassObserver.class);
	  app.put("GaussianNumericAttributeClassObserver", GaussianNumericAttributeClassObserver.class);
	  app.put("InfoGainSplitCriterion",InfoGainSplitCriterion.class);
	  app.put("BinaryTreeNumericAttributeClassObserver", BinaryTreeNumericAttributeClassObserver.class);
	  app.put("FIMTDDNumericAttributeClassObserver", FIMTDDNumericAttributeClassObserver.class);
	  app.put("FIMTDDNumericAttributeClassLimitObserver", FIMTDDNumericAttributeClassLimitObserver.class);
	  app.put("VFMLNumericAttributeClassObserver", VFMLNumericAttributeClassObserver.class);
	  app.put("IademGaussianNumericAttributeClassObserver", IademGaussianNumericAttributeClassObserver.class);
	  app.put("IademGreenwaldKhannaNumericAttributeClassObserver", IademGreenwaldKhannaNumericAttributeClassObserver.class);
	  app.put("IademVFMLNumericAttributeClassObserver", IademVFMLNumericAttributeClassObserver.class);	  
	  app.put("GiniSplitCriterion", GiniSplitCriterion.class);	  
	  app.put("InfoGainSplitCriterion", InfoGainSplitCriterion.class);	  
	  app.put("InfoGainSplitCriterionMultilabel", InfoGainSplitCriterionMultilabel.class);	  
	  app.put("SDRSplitCriterion", SDRSplitCriterion.class);	
	  app.put("AMRulesSplitCriterion", AMRulesSplitCriterion.class);
	  app.put("SDRSplitCriterionAMRules", SDRSplitCriterionAMRules.class);
	  app.put("SDRSplitCriterionAMRulesNode", SDRSplitCriterionAMRulesNode.class);	  
	  app.put("VarianceReductionSplitCriterion", VarianceReductionSplitCriterion.class);
	  app.put("VarianceRatioSplitCriterion", VarianceRatioSplitCriterion.class);
	  app.put("VRSplitCriterion", VRSplitCriterion.class);
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
	
	
	
	}