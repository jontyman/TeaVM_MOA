package edu.uow;

import com.github.javacliparser.*;
import moa.options.ClassOption;
import moa.options.OptionHandler;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;

import java.util.Map;

public class OptionHashMap implements Iterable<OptionAndLevel> {

    public Iterator<OptionAndLevel> iterator(){
        class MyIterator implements Iterator<OptionAndLevel> {
            public Iterator<Option> iterator;
            public Iterator<OptionAndLevel> subIterator;

			public int iteratorCount=0;
			public int subIteratorCount=1;
			// Test int
			

            MyIterator(Iterator<Option> iteratorInput, int iteratorCnt){
                iterator = iteratorInput;
                subIterator=null;
				iteratorCount=iteratorCnt;
				subIteratorCount=iteratorCount+1;
            }

            @Override
            public boolean hasNext() {
                if(subIterator!= null){
                    if(subIterator.hasNext()){
                        return true;
                    }
                    subIterator=null;
                }
                    return iterator.hasNext();

            }

            @Override
            public OptionAndLevel next() {
                if (subIterator!=null){
                    return subIterator.next();
                }
                else{
                    Option option =iterator.next();
                    if(option instanceof  ClassOption){
                        Object temp = ((ClassOption)option).getPreMaterializedObject();
                        if (temp instanceof OptionHandler){
                            Option[] arrOptions = ((OptionHandler)temp).getOptions().getOptionArray();
                            Iterator<Option> subIterator = Arrays.asList(arrOptions).iterator();
							//this.subIterator=1;
							// iterator<option>   iterator<OptionAndLevel>
                            this.subIterator=new MyIterator(subIterator,subIteratorCount);
                        }
                    }
                    return new OptionAndLevel(option,this.iteratorCount);
                }
            }
        };
        //Implement "has next" and "next" for iterator
        return new MyIterator(this.optHashMap.keySet().iterator(),0);

    }

    // If option is node

    // IntOption, FlagOption, MultiChoiceOption, ClassOption

    // Cast back use key to determine which type to cast back value

    //public Map<Integer,Option> customClass = new HashMap<>();

    // For iterator
    public Map<Option,Object> optHashMap = new HashMap<>();
	public boolean mapInit=false;

    void insertOption(Option a) {

        if (a instanceof MultiChoiceOption){
            optHashMap.put(a,((MultiChoiceOption)a).getOptionLabels());
        }

        else if ((a instanceof IntOption) || (a instanceof FloatOption)){
            optHashMap.put(a, a.getValueAsCLIString());

        }
		else if (a instanceof ClassOption){
            Object temp = ((ClassOption)a).getPreMaterializedObject();
            if (temp instanceof OptionHandler){
                Option[] arrOptions = (((OptionHandler) temp).getOptions()).getOptionArray();
                OptionHashMap mapForClass = new OptionHashMap(arrOptions);
                optHashMap.put(a,mapForClass);
            }

            else{
                // Throw exception
                throw new RuntimeException("Temp is not an option handler");
            }
            // insertOption(go through suboptions of class);
        }

        else if (a instanceof FlagOption) {
            optHashMap.put(a,a.getValueAsCLIString());
        }

        else {
            throw new RuntimeException("Unexpected option type");
        }

    }

    public OptionHashMap(Option[] arrOptions){
		mapInit=true;
        for(Option option: arrOptions){
            insertOption(option);
        }

    }
	
	public OptionHashMap(){
		mapInit=true;
		optHashMap = new HashMap<>();

    }

		/* for (Option option: optHashMap){
			handleOption(option);
		}
		Iterator<Option> iterator = optHashMap.iterator();
		while(iterator.hasNext()){
			Option option=iterator.next();
			handleOption(option);
		}*/
}


