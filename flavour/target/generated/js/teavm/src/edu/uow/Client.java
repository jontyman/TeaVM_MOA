package edu.uow;
import com.github.javacliparser.StringUtils;

import org.teavm.jso.dom.html.HTMLDocument;
import moa.classifiers.trees.HoeffdingTree;
import moa.classifiers.Classifier;
import moa.core.TimingUtils;
import moa.streams.generators.RandomRBFGenerator;
import com.yahoo.labs.samoa.instances.Instance;
import java.io.IOException;


public class Client {

        public Client(){
        }

        public void run(int numInstances, boolean isTesting){
                Classifier learner = new HoeffdingTree();
                RandomRBFGenerator stream = new RandomRBFGenerator();
                stream.prepareForUse();

                learner.setModelContext(stream.getHeader());
                learner.prepareForUse();

                int numberSamplesCorrect = 0;
                int numberSamples = 0;
				System.out.println(stream.hasMoreInstances());
                //boolean preciseCPUTiming = TimingUtils.enablePreciseTiming();
                //long evaluateStartTime = TimingUtils.getNanoCPUTimeOfCurrentThread();
                /*while (stream.hasMoreInstances() && numberSamples < numInstances) {
                        //Instance trainInst = stream.nextInstance().getData();
                        if (isTesting) {
                                if (learner.correctlyClassifies(trainInst)){
                                        numberSamplesCorrect++;
                                }
                        }
                        numberSamples++;
                        learner.trainOnInstance(trainInst);
                }*/
                //double accuracy = 100.0 * (double) numberSamplesCorrect/ (double) numberSamples;
                //double time = TimingUtils.nanoTimeToSeconds(TimingUtils.getNanoCPUTimeOfCurrentThread()- evaluateStartTime);
                //System.out.println(numberSamples + " instances processed with " + accuracy + "% accuracy in "+time+" seconds.");
        }

        public static void main(String[] args) throws IOException {
                Client exp = new Client();
                exp.run(1000000, true);
        }
}
