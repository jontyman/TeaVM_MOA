package edu.uow;

import org.teavm.flavour.templates.BindTemplate;
import org.teavm.flavour.widgets.ApplicationTemplate;
import java.util.HashMap;
import java.util.Map;
import java.util.Arrays;
import java.util.Set;
import org.teavm.jso.dom.html.HTMLDocument;
import java.util.concurrent.ExecutorService;
import org.teavm.flavour.templates.Templates;
import org.teavm.flavour.widgets.BackgroundWorker;

//MOA
import moa.streams.generators.RandomRBFGenerator;
import moa.core.Utils;
import moa.classifiers.core.attributeclassobservers.GaussianNumericAttributeClassObserver;
import moa.tasks.NullMonitor;
import org.teavm.jso.dom.html.HTMLDocument;
import com.github.javacliparser.StringUtils;
import moa.classifiers.trees.HoeffdingTree;
import moa.classifiers.Classifier;
import com.yahoo.labs.samoa.instances.Instance;
import com.yahoo.labs.samoa.instances.Instances;
import com.yahoo.labs.samoa.instances.InstanceImpl;
import com.yahoo.labs.samoa.instances.InstancesHeader;
import com.yahoo.labs.samoa.instances.Attribute;
import com.yahoo.labs.samoa.instances.AttributesInformation;
import java.io.IOException;
import java.util.Random;
import java.util.ArrayList;
import java.util.List;

//Import options
import com.github.javacliparser.Option;
import com.github.javacliparser.FlagOption;
//import com.github.javacliparser.ClassOption;
import com.github.javacliparser.MultiChoiceOption;

import com.github.javacliparser.IntOption;
import com.github.javacliparser.FloatOption;
import com.github.javacliparser.Options;

import moa.options.ClassOption;

import java.util.Iterator;

import java.text.DecimalFormat;







import moa.core.TimingUtils;
import moa.evaluation.BasicMultiTargetPerformanceEvaluator;
import moa.evaluation.BasicRegressionPerformanceEvaluator;
import moa.evaluation.BasicClassificationPerformanceEvaluator;

import moa.core.AutoExpandVector;

//Import JSBody
import org.teavm.jso.JSBody;
import org.teavm.jso.JSBodyImport;

//Import Asynchronous TeaVM
import org.teavm.interop.AsyncCallback;
//import org.teavm.jso.util.JsConsumer;

//Plotly test
//import {} from 'https://cdn.plot.ly/plotly-2.24.1.min.js';

//Other imports:
import moa.classifiers.core.attributeclassobservers.DiscreteAttributeClassObserver;
import moa.classifiers.core.attributeclassobservers.NumericAttributeClassObserver;
import moa.classifiers.core.splitcriteria.SplitCriterion;
import moa.classifiers.core.attributeclassobservers.NominalAttributeClassObserver;


import java.lang.Class;

// Other classifiers
import moa.classifiers.meta.StreamingRandomPatches;




@BindTemplate("templates/client.html")
public class Client extends ApplicationTemplate {
    private String userName = "";
	private int instanceLimit=100000000;
	//private int sampleFrequency=100000;
	private int sampleFrequency=10;
	private String evaluator="";
	private String prevEvaluator="";

	private double accuracy=0;
	private double meanError=0.0;
	private double squareError=0.0;
	private double kappaStat=0.0;
	private double kappaTemporalStat=0.0;
	private double kappaMStat=0.0;
	
	public ArrayList<Double> accuracyArr=new ArrayList<>();
	public ArrayList<Double> meanErrorArr= new ArrayList<>();
	public ArrayList<Double> squareErrorArr= new ArrayList<>();
	public ArrayList<Double> kappaStatArr=new ArrayList<>();
	public ArrayList<Double> kappaTemporalStatArr= new ArrayList<>();
	public ArrayList<Double> kappaMStatArr= new ArrayList<>();
	public ArrayList<Integer> numInstanceArr = new ArrayList<>();

	//private List<Integer> lisValues = new ArrayList<>();
	List<Integer> lisValues = new ArrayList<>(Arrays.asList(1,4));
	public List<Boolean> boolValues = new ArrayList<>(Arrays.asList(true, false, true, false, false, true));
    //private List<Boolean> boolValues = new ArrayList<>(Arrays.asList(false, false, true, false, false, true));
	private boolean chkBox;
	public boolean inpTextBox;
	private boolean removeCheckBoxes=false;
	public Option[] arrOptions;
	//public MultiChoiceOption[] arrMultiChoiceOptions;
	public Option[] optArr2;
	public ArrayList<String> optionsTypes = new ArrayList<>();
	public ArrayList<String> optionsNames = new ArrayList<>();
	public int testComparison=2;
	private static String toastMessage="Hi Jonathan";
	public ArrayList<MultiChoiceOption> arrMultiChoice = new ArrayList<>();
	public ArrayList<ClassOption> arrClass = new ArrayList<>();
	public Map<Integer,MultiChoiceOption> mpMultiChoice = new HashMap<>();
	public Map<Integer,ClassOption> mpClass = new HashMap<>();
	public Map<Integer,String[]> mpStrMultiChoice = new HashMap<>();
	public Map<Integer,String[]> mpStrClass = new HashMap<>();
	public OptionHashMap optHMap = new OptionHashMap();
	
	public Classifier learner; // = new HoeffdingTree(33554432, 0,1, 1000000, 200, 0.0f, 0.05f, false, false, false, false, 2, 0);
	
	public boolean chartPresent = false;
	
	public ArrayList<ValuePosition> valuePos = new ArrayList<>();
	public Map<String, String> myMap = new HashMap<String, String>() {{
            put("key1", "value1");
            put("key2", "value2");
            // Add more key-value pairs as needed
        }};
		


    public static void main(String[] args) {
        Client client = new Client();
        client.bind("application-content");
    }
	
	public String getInstanceLimit(){
		return Integer.toString(instanceLimit);
	}
	
	 public void setInstanceLimit(String instanceLimit) {
        this.instanceLimit = Integer.parseInt(instanceLimit);
    }
	
	public String getSampleFrequency(){
		return Integer.toString(sampleFrequency);
	}
	
	 public void setSampleFrequency(String sampleFrequency) {
        this.sampleFrequency = Integer.parseInt(sampleFrequency);
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
	
	public String getEvaluator(){
		return evaluator;
	}
	
	 public void setEvaluator(String evaluator) {
        this.evaluator = evaluator;
		Templates.update();
    }
	
	private boolean binarySplits=true;
	private boolean stopMemMgmt;
	private boolean removePoorAtts;
	private boolean noPrePrune;

  public boolean isBinarySplits() {
    return binarySplits;
  }

  public void setBinarySplits(boolean binarySplits) {
    this.binarySplits = binarySplits;
  }

  public boolean isStopMemMgmt() {
    return stopMemMgmt;
  }

  public void setStopMemMgmt(boolean stopMemMgmt) {
    this.stopMemMgmt = stopMemMgmt;
  }
  
   public boolean isRemovePoorAtts() {
    return removePoorAtts;
  }

  public void setRemovePoorAtts(boolean removePoorAtts) {
    this.removePoorAtts = removePoorAtts;
  }
  
    public boolean isNoPrePrune() {
    return noPrePrune;
  }

  public void setNoPrePrune(boolean noPrePrune) {
    this.noPrePrune = noPrePrune;
  }
   
  
  Client(){
		mapTitleToAuthor.put("Title 1", "Author 1");
		mapTitleToAuthor.put("Title 2", "Author 2");
		mapTitleToAuthor.put("Title 3", "Author 3");
		
		  
  }
  
	  private Map<String, String> mapTitleToAuthor = new HashMap<>();

	  public Set<String> getTitles() {
		return mapTitleToAuthor.keySet();
	  }

	  public String getAuthor(String title) {
		return mapTitleToAuthor.get(title);
	  }

	private String text = "";

  public String getText() {
    return text;
  }

  public void setText(String text) {
    this.text = text;
  }
  
    String value = "1";

  public String getValue() {
    return value;
  }

  public void setValue(String value) {
    this.value = value;
  }
  
  private int clickCount = 0;

  public void handleClick() {
    try{
		clickCount++;
		
		if(chartPresent){
			destroyChartWithoutImport("myChart");
			chartPresent=false;
		}
		
		this.numInstanceArr = new ArrayList<>();

		
		this.accuracy=0;
		this.meanError=0.0;
		this.squareError=0.0;
		this.kappaStat=0.0;
		this.kappaTemporalStat=0.0;
		
		this.accuracyArr=new ArrayList<>();
		this.meanErrorArr=new ArrayList<>();
		this.squareErrorArr=new ArrayList<>();
		this.kappaStatArr=new ArrayList<>();
		this.kappaTemporalStatArr=new ArrayList<>();
		this.kappaMStatArr = new ArrayList<>();
		
		switch(this.evaluator){
			case "runWithoutStream":
				runWithoutStream();
				break;
			case "runRBF":
				if(this.prevEvaluator!=this.evaluator){
					this.learner = new HoeffdingTree(33554432, 0,1, 1000000, 200, 0.0f, 0.05f, false, false, false, false, 2, 0);
				}
				runRBF();
				break;
			case "runSRP":
				if(this.prevEvaluator!=this.evaluator){
					this.learner = new StreamingRandomPatches();
				}
				runRBF();
				break;
			case "runWithoutStreamNumeric":
				runWithoutStreamNumeric();
				break;
			case "test":
				runTest();
				break;
			default:
				runWithoutStream();
		}
	
		
	}catch (Throwable e){
		System.out.println("Failed to create");
		e.printStackTrace(System.err);
		throw e;
		
		// Comment out do while loop
		/*do {
			e.printStackTrace(System.err);
			Throwable e2 = e.getCause();
			if(e==e2){
				e=null;
			}
			else{
				e=e2;
			}
 
		}while(e!=null);*/
		
	}
	

  }

  public int getClickCount() {
    return clickCount;
  }
  
  public double getAccuracy(){
	  return accuracy;
  }
  
  public double getMeanError(){
	  return meanError;
  }
  
  public double getSquareError(){
	  return squareError;
  }
  
  public double getKappaStat(){
	  return kappaStat;
  }
  
  public double getKappaTemporalStat(){
	  return kappaTemporalStat;
  }
  
  private double getKappaMStat(){
		return kappaMStat;
  }
  
  public List<Integer> getLisValues(){
	return lisValues;
  }
  
  public boolean isChkBox(){
	  return chkBox;
  }
  
  public void setChkBox(boolean chkBox){
	  this.chkBox=chkBox;
  }
    
  private String color;

  public String getColor() {
    return color;
  }

  public void setColor(String color) {
    this.color = color;
    Templates.update();
  }
  
  private String color2;

  public String getColor2() {
    return color2;
  }

  public void setColor2(String color2) {
    this.color2 = color2;
    Templates.update();
  }
  
  public void runWithoutStream(){
		
		Random r = new Random();
		long randomSeed = 10;
        r.setSeed(randomSeed);
		
		double testMathRandom = Math.random()*2;
		System.out.println(testMathRandom);
		

				
		String[] attributes = {"A1","A2","A3","A4","A5","A6","A7","A8","A9","A10"};
		int numAttributes = attributes.length;
		
		List<String> nominalClassValues = Arrays.asList("Benign", "Malignant");
		String nominalClassAttName = "diagnosedCond";
				
		Attribute[] arrayAttribute=new Attribute[numAttributes];
		for (int i= 0; i< numAttributes-1; i++){
			arrayAttribute[i] = new Attribute(attributes[i]);
		}
		arrayAttribute[numAttributes-1] = new Attribute(nominalClassAttName,nominalClassValues);
		System.out.println("Attribute diagnosis is isNominal: " + arrayAttribute[numAttributes-1].isNominal());
		
		double generateRandDouble = r.nextDouble()*2;
		System.out.println("Rounded down double to int of: " + generateRandDouble + " is: " + Math.floor(generateRandDouble));
		
		String informationStr = "usedToDescribeInformation";
		int numInstance = 100;
		
		Instances multiInst = new Instances(informationStr, arrayAttribute, numInstance);
		
		int numberSamplesCorrect=0;
		int numberSamples=0;
		
		boolean isTesting=true;
				
		for (int j=0; j<numInstance; j++){
			double[] arrayDoubles = {r.nextDouble()*3, r.nextDouble()*2, r.nextDouble()*3, r.nextDouble()*8, r.nextDouble()*4, r.nextDouble()*7, r.nextDouble()*7, r.nextDouble()*3, r.nextDouble()*4, Math.floor(r.nextDouble()*2)};
			System.out.println(Arrays.toString(arrayDoubles));		
			InstanceImpl a = new InstanceImpl(r.nextDouble(),arrayDoubles);
			multiInst.add(a);
		
		}
		multiInst.setClassIndex(numAttributes - 1);
		InstancesHeader multiInstHeader = new InstancesHeader(multiInst);

		
		System.out.println("Weight of instance at index 2 is: " + multiInst.get(2).weight());
		System.out.println("Num classes is : " + multiInst.numClasses());
		
		Classifier learner = new HoeffdingTree(33554432, 0,1, 1000000, 200, 0.0f, 0.05f, false, false, false, false, 2, 0);
		learner.setModelContext(multiInstHeader);
		
		for (int k = 0; k < numInstance; k++){
			Instance trainInst = multiInst.instance(k);
			trainInst.setDataset(multiInst);
			if (isTesting){
				if (learner.correctlyClassifies(trainInst)){
					numberSamplesCorrect++;
				}
				
			}
			numberSamples++;
			learner.trainOnInstance(trainInst);
		}
		

		
		accuracy = 100.0 * (double) numberSamplesCorrect/ (double) numberSamples;
		System.out.println("Accuracy is: " + accuracy);
				
		System.out.println(StringUtils.doubleToString(4.7777777778,2));
	}
	
	public void runRBF(){
		this.prevEvaluator=this.evaluator;
		//public RandomRBFGenerator (int modelRandomSeed, int instanceRandomSeed, int numClasses, int numAtts, int numCentroids){
		RandomRBFGenerator stream = new RandomRBFGenerator(1,1,2,10,50);
		BasicClassificationPerformanceEvaluator bClass = new BasicClassificationPerformanceEvaluator();
		stream.prepareForUseImpl(new NullMonitor(),null);
		learner.prepareForUse();
		
		
		// Have error with Class Option
		arrOptions = learner.getOptions().getOptionArray(); // Options->Option[]
		optHMap = new OptionHashMap(arrOptions);
		Iterator<OptionAndLevel> iterator = optHMap.iterator();
		 for (OptionAndLevel i : optHMap) {
            System.out.println("OptHashMap " + (i.option).getValueAsCLIString());
        }
		
		while(iterator.hasNext()){
			System.out.println("OptHashMap iterator " + ((iterator.next()).option).getValueAsCLIString());
		}
		System.out.println("Option 0 of Hoeffding is: " + arrOptions[0].getValueAsCLIString()); //getValueAsCLIString() calls getOptions which uses reflection unless overriden
		identifyOptionType();


		
		learner.setModelContext(stream.getHeader());
		
		//int numInstance=1000000; // old
		int numInstance=100;
		
		int numberSamplesCorrect=0;
		int numberSamples=0;
		boolean isTesting=true;
		int counter=0;
		
		chartPresent = true;
		
		initLineGraphWithoutImport("Accuracy");

		
		for (int j = 0; j < numInstance; j++){
			Instance trainInst = stream.nextInstance();
			if (isTesting){
				bClass.addResult(trainInst,learner.getVotesForInstance(trainInst));
				if (learner.correctlyClassifies(trainInst)){
					numberSamplesCorrect++;
				}
				
			}
			numberSamples++;
			counter++;
			DecimalFormat df = new DecimalFormat("#.##");
			if(counter >= this.sampleFrequency ){
					counter=0;
					System.out.println("Hit samp freq. accuracy: " + bClass.getFractionCorrectlyClassified()*100);
					System.out.println("Hit samp freq. Kappa stat: " + bClass.getKappaStatistic());
					System.out.println("Hit samp freq. Kappa Temporal stat: " + bClass.getKappaTemporalStatistic());
					System.out.println("Hit samp freq. Kappa M stat: " + bClass.getKappaMStatistic());

					double temp = bClass.getFractionCorrectlyClassified()*100;
					double temp2= bClass.getKappaStatistic();
					double temp3 = bClass.getKappaTemporalStatistic();
					double temp4 = bClass.getKappaMStatistic();
					this.accuracyArr.add(temp);
					this.kappaStatArr.add(temp2);
					this.kappaTemporalStatArr.add(temp3);
					this.kappaMStatArr.add(temp4);
					this.numInstanceArr.add(j+1);
					//updateLineGraphWithInp(Integer.toString(j+1),Double.toString(temp),"myChart");
					
					//Runs with jumble of order of points
					//updateLineGraphWithoutCanvasID(Integer.toString(j+1),Double.toString(temp));
					
					updateLineGraphWithoutImport(Integer.toString(j+1),Double.toString(temp));
					
					//updateLineGraphWithoutCanvasID(Integer.toString(j+1),Integer.toString(j+10));

			}
			learner.trainOnInstance(trainInst);
			
		}
		
		
		
		accuracy = 100.0 * (double) numberSamplesCorrect/ (double) numberSamples;
		System.out.println("Accuracy is: " + accuracy);
		
		this.kappaStat = bClass.getKappaStatistic()*100;
		this.kappaTemporalStat = bClass.getKappaTemporalStatistic()*100;
		
		//plotLineGraphWithInp(this.numInstanceArr.toString(), this.accuracyArr.toString(),"Accuracy");
		this.kappaMStat = bClass.getKappaMStatistic()*100;
		

	}
	
	public void runWithoutStreamNumeric(){
		//BasicMultiTargetPerformanceEvaluator bEval = new BasicMultiTargetPerformanceEvaluator();
		BasicRegressionPerformanceEvaluator bEval = new BasicRegressionPerformanceEvaluator();

		
		Random r = new Random();
		long randomSeed = 10;
        r.setSeed(randomSeed);
		
		double testMathRandom = Math.random()*2;
		System.out.println(testMathRandom);
				
		// JavaScript
		
		
		//multiInst.instances = new ArrayList<Instance>();
		
		String[] attributes = {"A1","A2","A3","A4","A5","A6","A7","A8","A9","A10"};
		int numAttributes = attributes.length;
		
		List<String> nominalClassValues = Arrays.asList("Benign", "Malignant");
		String nominalClassAttName = "diagnosedCond";
		
		//Attribute nominalAttribute = new Attribute(nominalClassAttName,nominalClassValues);
		
		Attribute[] arrayAttribute=new Attribute[numAttributes];
		for (int i= 0; i< numAttributes; i++){
			arrayAttribute[i] = new Attribute(attributes[i]);
		}

		System.out.println("Attribute A10 is isNumeric: " + arrayAttribute[numAttributes-1].isNumeric());
		
		double generateRandDouble = r.nextDouble()*2;
		System.out.println("Rounded down double to int of: " + generateRandDouble + " is: " + Math.floor(generateRandDouble));
		
		String informationStr = "usedToDescribeInformation";
		int numInstance = 100;
		
		Instances multiInst = new Instances(informationStr, arrayAttribute, numInstance);
		
		int numberSamplesCorrect=0;
		int numberSamples=0;
		
		boolean isTesting=true;
		
		// Utils.maxIndex works
		
		for (int j=0; j<numInstance; j++){
			double[] arrayDoubles = {r.nextDouble()*3, r.nextDouble()*2, r.nextDouble()*3, r.nextDouble()*8, r.nextDouble()*4, r.nextDouble()*7, r.nextDouble()*7, r.nextDouble()*3, r.nextDouble()*4, Math.floor(r.nextDouble()*2)};
			System.out.println(Arrays.toString(arrayDoubles));		
			InstanceImpl a = new InstanceImpl(r.nextDouble(),arrayDoubles);
			multiInst.add(a);
		
		}
		multiInst.setClassIndex(numAttributes - 1);
		InstancesHeader multiInstHeader = new InstancesHeader(multiInst);

		
		System.out.println("Weight of instance at index 2 is: " + multiInst.get(2).weight());
		System.out.println("Num classes is : " + multiInst.numClasses());
		
		//public void HoeffdingTree(int maxByteSize,int numericEstimator, int splitCriterion, int memoryEstimatePeriod, int gracePeriod, float splitConfidence, float tieThreshold, boolean binarySplits, boolean stopMemManagement, boolean removePoorAtts, boolean noPrePrune, int leafprediction, int nbThreshold){

		
		//GaussianNumericEstimator, InfoGainSplitCriterion
		Classifier learner = new HoeffdingTree(33554432, 0,1, 1000000, 200, 0.0f, 0.05f, false, false, false, false, 2, 0);
		learner.setModelContext(multiInstHeader);
		

		int counter=0;
				
		//Regression
		for (int j = 0; j < numInstance; j++){
			Instance trainInst = multiInst.instance(j);
			trainInst.setDataset(multiInst);
			if (isTesting){
				bEval.addResult(trainInst,learner.getPredictionForInstance(trainInst));
				counter++;
				if(counter >= this.sampleFrequency ){
					counter=0;
					System.out.println("Hit samp freq. Mean error: " + bEval.getMeanError());
					System.out.println("Hit samp freq. Square error: " + bEval.getSquareError());
					double temp = bEval.getMeanError();
					double temp2= bEval.getSquareError();
					this.meanErrorArr.add(temp);
					this.squareErrorArr.add(temp2);
					this.numInstanceArr.add(j+1);
				}
				
			}
			learner.trainOnInstance(trainInst);
			
		}
		
		
		meanError = bEval.getMeanError();
		System.out.println("Mean error is: " + meanError);
		System.out.println("Num instance arraylist to string is: " + this.numInstanceArr.toString());
		plotLineGraphWithInp(this.numInstanceArr.toString(),this.meanErrorArr.toString(),"Mean Error");
		squareError = bEval.getSquareError();
		System.out.println("Square error is: " + squareError);
		
	}
	
	public class Fibonacci {
    private List<Integer> fiboValues = new ArrayList<>();

    public Fibonacci() {
        fiboValues.add(0);
        fiboValues.add(1);
    }

    public List<Integer> getValues() {
        return fiboValues;
    }

    public void next() {
        fiboValues.add(fiboValues.get(fiboValues.size() - 2) + fiboValues.get(fiboValues.size() - 1));
    }
	
}
public void identifyOptionType(){
	
	for (int i = 0; i< arrOptions.length;i++){		            
		optionsNames.add(arrOptions[i].getName());

		optionsTypes.add(arrOptions[i].getClass().getSimpleName());
		System.out.println("Option type is: " + optionsTypes.get(i)+" done");
		
		if(arrOptions[i] instanceof MultiChoiceOption){
			arrMultiChoice.add((MultiChoiceOption)arrOptions[i]);
			mpMultiChoice.put(i,(MultiChoiceOption)arrOptions[i]);
			mpStrMultiChoice.put(i,((MultiChoiceOption)arrOptions[i]).getOptionLabels());
			String[] a = ((MultiChoiceOption)arrOptions[i]).getOptionLabels();
			valuePos.add(new ValuePosition(a,i));
			
		}
		else if(arrOptions[i] instanceof ClassOption){
			arrClass.add((ClassOption)arrOptions[i]);
			mpStrClass.put(i,(((ClassOption) arrOptions[i]).getListClasses().toArray(new String[0])));
		}

					
		}

}


public void runTest(){
		System.out.println("Reached here");
		Class<?> htTest = GaussianNumericAttributeClassObserver.class;
        Class<?> required = NumericAttributeClassObserver.class;
		Class<?> requiredType = NumericAttributeClassObserver.class;


		for (Map.Entry<String, String> entry : myMap.entrySet()) {
			 System.out.println(entry.getValue());
				 

		}
		System.out.println(myMap.get("key1"));

        System.out.println("Is assignable: " + required.isAssignableFrom(htTest));
		
		System.out.println("Class names:" + (ClassOption.getListClasses(requiredType)).toString());
				
		ClassOption.helloWorld();
		
		
		


}

@JSBody(params = { "message" }, script = "console.log(message)")
public static native void log(String message);

@JSBody(params = { "message" }, script = "document.getElementById('myspan').textContent=message;console.log('Success '+ message)")
public static native void changeText(String message);


	@JSBody (params = { "message" }, script = "import('https://esm.sh/toastify-js@1.12.0').then( ({default :Toastify}) => { Toastify({text: message,duration: 3000,}).showToast();console.log('Jonathan toast message done') })")
    private static native void callToastify(String message);
	
	@JSBody(script="import('https://cdn.jsdelivr.net/npm/chart.js').then(({default : chartJs}) => { const ctx=document.getElementById('myChart');new Chart(ctx, {type: 'bar',data: {labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],datasets: [{label: '# of Votes',data: [12, 19, 3, 5, 2, 3],borderWidth: 1}]},options: {scales: {y: {beginAtZero: true}}}});})")
	private static native void plotGraph();
	
	@JSBody(params={"message"},script="import('https://cdn.jsdelivr.net/npm/chart.js').then(({default : chartJs}) => {const addedDataSet = JSON.parse(message);console.log('new data is: ' + addedDataSet); const ctx=document.getElementById('myChart');new Chart(ctx, {type: 'bar',data: {labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],datasets: [{label: '# of Votes',data: addedDataSet,borderWidth: 1}]},options: {scales: {y: {beginAtZero: true}}}});})")
	private static native void plotBarGraphWithInp(String message);
	
	/*@Async
	public static native void initLineGraphWithInpWithinAsync(String labelText);
	private static void initLineGraphWithInpWithinAsync(String labelText, AsyncCallback<Void> callback) {
    initLineGraphWithInpWithinJS(arg, result -> callback.complete(result));
	}*/
	
	
	/*@JsBody(params = { "arg", "callback" }, script = "return foo(arg, callback);")
public static native void fooAsync(String arg, JsConsumer<String> callback);*/

/*@JSBody(params={"labelText", "callback"},script="import('https://cdn.jsdelivr.net/npm/chart.js').then(({default : chartJs}) => {var addedXDataSet=[]; const addedYDataSet=[];console.log('new data is: ' + addedXDataSet); const ctx=document.getElementById('myChart');new Chart(ctx, {type: 'line',data: {labels: addedXDataSet,datasets: [{label: labelText,data: addedYDataSet,borderWidth: 1}]},options: {scales: {y: {beginAtZero: true}}}});}).then(callback)")
	private static native void initLineGraphWithInpWithinJS(String labelText,JsConsumer<Void> callback);*/
	
	
	
	@JSBody(params={"labelText"},script="import('https://cdn.jsdelivr.net/npm/chart.js').then(({default : chartJs}) => {var addedXDataSet=[]; const addedYDataSet=[];console.log('new data is: ' + addedXDataSet); const ctx=document.getElementById('myChart');new Chart(ctx, {type: 'line',data: {labels: addedXDataSet,datasets: [{label: labelText,data: addedYDataSet,borderWidth: 1}]},options: {scales: {y: {beginAtZero: true}}}});})")
	private static native void initLineGraphWithInp(String labelText);
	
	
	@JSBody(params={"xAxis", "yAxis", "labelText"},script="import('https://cdn.jsdelivr.net/npm/chart.js').then(({default : chartJs}) => {const addedXDataSet = JSON.parse(xAxis);const addedYDataSet=JSON.parse(yAxis);console.log('new data is: ' + addedXDataSet); const ctx=document.getElementById('myChart');new Chart(ctx, {type: 'line',data: {labels: addedXDataSet,datasets: [{label: labelText,data: addedYDataSet,borderWidth: 1}]},options: {scales: {y: {beginAtZero: true}}}});})")
	private static native void plotLineGraphWithInp(String xAxis, String yAxis, String labelText );

	@JSBody(params={"xAxis", "yAxis", "canvasID"},script="import('https://cdn.jsdelivr.net/npm/chart.js').then(({default : chartJs}) => {const yAxisParse = JSON.parse(yAxis);const xAxisParse = JSON.parse(xAxis);const ctx = Chart.getChart(canvasID);console.log('ctx is: ' + ctx);ctx.data.labels.push(xAxisParse);ctx.data.datasets.push(yAxisParse);ctx.update()})")
	private static native void updateLineGraphWithInp(String xAxis, String yAxis,String canvasID);
	
	@JSBody(params={"xAxis", "yAxis"},script="import('https://cdn.jsdelivr.net/npm/chart.js').then(({default : chartJs}) => {const yAxisParse = JSON.parse(yAxis);const xAxisParse = JSON.parse(xAxis);const ctx = Chart.getChart('myChart');console.log('ctx is: ' + ctx);ctx.data.labels.push(xAxisParse);ctx.data.datasets.forEach((dataset) => { dataset.data.push(yAxisParse);});ctx.update()})")
	private static native void updateLineGraphWithoutCanvasID(String xAxis, String yAxis);
	
	@JSBody(params={"labelText"},script="var addedXDataSet=[]; const addedYDataSet=[];console.log('new data is: ' + addedXDataSet); const ctx=document.getElementById('myChart');new Chart(ctx, {type: 'line',data: {labels: addedXDataSet,datasets: [{label: labelText,data: addedYDataSet,borderWidth: 1}]},options: {scales: {y: {beginAtZero: true}}}});")
	private static native void initLineGraphWithoutImport(String labelText);
	
	@JSBody(params={"xAxis", "yAxis"},script="const yAxisParse = JSON.parse(yAxis);const xAxisParse = JSON.parse(xAxis);const ctx = Chart.getChart('myChart');console.log('ctx is: ' + ctx);ctx.data.labels.push(xAxisParse);ctx.data.datasets.forEach((dataset) => { dataset.data.push(yAxisParse);});ctx.update()")
	private static native void updateLineGraphWithoutImport(String xAxis, String yAxis);


	@JSBody(params={"canvasID"},script="import('https://cdn.jsdelivr.net/npm/chart.js').then(({default : chartJs}) => {const chart = Chart.getChart(canvasID);console.log('Destroying chart' + chart);if(chart){chart.destroy();}})")
	private static native void destroyChart(String canvasID);

@JSBody(params={"canvasID"},script="const chart = Chart.getChart(canvasID);console.log('Destroying chart' + chart);if(chart){chart.destroy();}")
	private static native void destroyChartWithoutImport(String canvasID);

	
	/*@JSBody(params={"xAxis", "yAxis", "labelText"},script="import('https://cdn.plot.ly/plotly-2.27.0.min.js').then(({}) => {const addedXDataSet = JSON.parse(xAxis); const addedYDataSet = JSON.parse(yAxis);graph=document.getElementById(canvasID);Plotly.update(graph,[{addedXDataSet,addedYDataSet}]);})")
	private static native void plotlyLineUpdate(String xAxis, String yAxis, String canvasID);*/
	
	
// Value of script must be a constant expression
	
}
