package edu.uow;

import moa.options.OptionHandler;
import com.github.javacliparser.Option;

public class OptionAndLevel{
	public int level;
	public Option option;
	
	public OptionAndLevel(){
		
	}
	
	public OptionAndLevel(Option opt, int lvl ){
		this.option = opt;
		this.level=lvl;
	}

}