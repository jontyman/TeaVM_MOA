/*
 *    HoeffdingTree.java
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
package moa.classifiers.trees;

import java.util.Arrays;
import java.util.Comparator;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;
import com.github.javacliparser.FlagOption;
import com.github.javacliparser.FloatOption;
import com.github.javacliparser.IntOption;
import com.github.javacliparser.MultiChoiceOption;
import moa.core.AbstractMOAObject;
import moa.capabilities.CapabilitiesHandler;
import moa.capabilities.Capability;
import moa.capabilities.ImmutableCapabilities;
import moa.classifiers.AbstractClassifier;
import moa.classifiers.MultiClassClassifier;
import moa.classifiers.bayes.NaiveBayes;
import moa.classifiers.core.AttributeSplitSuggestion;
import moa.classifiers.core.attributeclassobservers.AttributeClassObserver;
import moa.classifiers.core.attributeclassobservers.DiscreteAttributeClassObserver;
import moa.classifiers.core.attributeclassobservers.NullAttributeClassObserver;
import moa.classifiers.core.attributeclassobservers.NominalAttributeClassObserver;
import moa.classifiers.core.attributeclassobservers.NumericAttributeClassObserver;
import moa.classifiers.core.attributeclassobservers.GaussianNumericAttributeClassObserver;
import moa.classifiers.core.attributeclassobservers.GreenwaldKhannaNumericAttributeClassObserver;
import moa.classifiers.core.attributeclassobservers.BinaryTreeNumericAttributeClassObserver;
import moa.classifiers.core.attributeclassobservers.BinaryTreeNumericAttributeClassObserverRegression;
import moa.classifiers.core.attributeclassobservers.FIMTDDNumericAttributeClassObserver;
import moa.classifiers.core.attributeclassobservers.VFMLNumericAttributeClassObserver;
import moa.classifiers.rules.core.attributeclassobservers.FIMTDDNumericAttributeClassLimitObserver;
import moa.classifiers.trees.iadem.IademGaussianNumericAttributeClassObserver;
import moa.classifiers.trees.iadem.IademGreenwaldKhannaNumericAttributeClassObserver;
import moa.classifiers.trees.iadem.IademVFMLNumericAttributeClassObserver;

import moa.classifiers.core.splitcriteria.GiniSplitCriterion;
import moa.classifiers.core.splitcriteria.InfoGainSplitCriterion;
import moa.classifiers.core.splitcriteria.InfoGainSplitCriterionMultilabel;
import moa.classifiers.core.splitcriteria.SDRSplitCriterion;
import moa.classifiers.core.splitcriteria.VarianceReductionSplitCriterion;
import moa.classifiers.rules.core.splitcriteria.SDRSplitCriterionAMRules;
import moa.classifiers.rules.core.splitcriteria.SDRSplitCriterionAMRulesNode;
import moa.classifiers.rules.core.splitcriteria.VRSplitCriterion;
import moa.classifiers.rules.core.splitcriteria.VarianceRatioSplitCriterion;






import moa.classifiers.core.conditionaltests.InstanceConditionalTest;
import moa.classifiers.core.splitcriteria.SplitCriterion;
import moa.classifiers.core.splitcriteria.InfoGainSplitCriterion;
import moa.core.AutoExpandVector;
import moa.core.DoubleVector;
import moa.core.Measurement;
import moa.core.SizeOf;
import moa.core.StringUtils;
import moa.core.Utils;
import moa.options.ClassOption;
import com.yahoo.labs.samoa.instances.Instance;

import com.github.javacliparser.Options;
import com.github.javacliparser.Option;

/**
 * Hoeffding Tree or VFDT.
 *
 * A Hoeffding tree is an incremental, anytime decision tree induction algorithm
 * that is capable of learning from massive data streams, assuming that the
 * distribution generating examples does not change over time. Hoeffding trees
 * exploit the fact that a small sample can often be enough to choose an optimal
 * splitting attribute. This idea is supported mathematically by the Hoeffding
 * bound, which quantiﬁes the number of observations (in our case, examples)
 * needed to estimate some statistics within a prescribed precision (in our
 * case, the goodness of an attribute).</p> <p>A theoretically appealing feature
 * of Hoeffding Trees not shared by other incremental decision tree learners is
 * that it has sound guarantees of performance. Using the Hoeffding bound one
 * can show that its output is asymptotically nearly identical to that of a
 * non-incremental learner using inﬁnitely many examples. See for details:</p>
 *
 * <p>G. Hulten, L. Spencer, and P. Domingos. Mining time-changing data streams.
 * In KDD’01, pages 97–106, San Francisco, CA, 2001. ACM Press.</p>
 *
 * <p>Parameters:</p> <ul> <li> -m : Maximum memory consumed by the tree</li>
 * <li> -n : Numeric estimator to use : <ul> <li>Gaussian approximation
 * evaluating 10 splitpoints</li> <li>Gaussian approximation evaluating 100
 * splitpoints</li> <li>Greenwald-Khanna quantile summary with 10 tuples</li>
 * <li>Greenwald-Khanna quantile summary with 100 tuples</li>
 * <li>Greenwald-Khanna quantile summary with 1000 tuples</li> <li>VFML method
 * with 10 bins</li> <li>VFML method with 100 bins</li> <li>VFML method with
 * 1000 bins</li> <li>Exhaustive binary tree</li> </ul> </li> <li> -e : How many
 * instances between memory consumption checks</li> <li> -g : The number of
 * instances a leaf should observe between split attempts</li> <li> -s : Split
 * criterion to use. Example : InfoGainSplitCriterion</li> <li> -c : The
 * allowable error in split decision, values closer to 0 will take longer to
 * decide</li> <li> -t : Threshold below which a split will be forced to break
 * ties</li> <li> -b : Only allow binary splits</li> <li> -z : Stop growing as
 * soon as memory limit is hit</li> <li> -r : Disable poor attributes</li> <li>
 * -p : Disable pre-pruning</li> 
 *  <li> -l : Leaf prediction to use: MajorityClass (MC), Naive Bayes (NB) or NaiveBayes
 * adaptive (NBAdaptive).</li>
 *  <li> -q : The number of instances a leaf should observe before
 * permitting Naive Bayes</li>
 * </ul>
 *
 * @author Richard Kirkby (rkirkby@cs.waikato.ac.nz)
 * @version $Revision: 7 $
 */
public class HoeffdingTree extends AbstractClassifier implements MultiClassClassifier,
                                                                 CapabilitiesHandler {

    private static final long serialVersionUID = 1L;

    @Override
    public String getPurposeString() {
        return "Hoeffding Tree or VFDT.";
    }
	
	/*@Override
    public Options getOptions() {
        Option[] myOptions= {new IntOption("maxByteSize", 'm',
            "Maximum memory consumed by the tree.", 33554432, 0,
	Integer.MAX_VALUE),new ClassOption("nominalEstimator",
            'd', "Nominal estimator to use.", DiscreteAttributeClassObserver.class,
            "NominalAttributeClassObserver"),new ClassOption("numericEstimator",
            'n', "Numeric estimator to use.", NumericAttributeClassObserver.class,
            "GaussianNumericAttributeClassObserver"),new IntOption(
            "memoryEstimatePeriod", 'e',
            "How many instances between memory consumption checks.", 1000000,
            0, Integer.MAX_VALUE),new IntOption(
            "gracePeriod",
            'g',
            "The number of instances a leaf should observe between split attempts.",
            200, 0, Integer.MAX_VALUE),new ClassOption("splitCriterion",
            's', "Split criterion to use.", SplitCriterion.class,
            "InfoGainSplitCriterion"),splitConfidenceOption = new FloatOption(
            "splitConfidence",
            'c',
            "The allowable error in split decision, values closer to 0 will take longer to decide.",
            0.0000001, 0.0, 1.0),new FloatOption("tieThreshold",
            't', "Threshold below which a split will be forced to break ties.",
            0.05, 0.0, 1.0),new FlagOption("binarySplits", 'b',
        "Only allow binary splits."), new FlagOption(
            "stopMemManagement", 'z',
            "Stop growing as soon as memory limit is hit."),new FlagOption("removePoorAtts",
            'r', "Disable poor attributes."),new FlagOption("noPrePrune", 'p',
            "Disable pre-pruning."),
			new MultiChoiceOption(
            "leafprediction", 'l', "Leaf prediction to use.", new String[]{
                "MC", "NB", "NBAdaptive"}, new String[]{
                "Majority class",
                "Naive Bayes",
                "Naive Bayes Adaptive"}, 2)};
	
		for (int i=0; i< myOptions.length;i++){
		System.out.println("Option " + i + " is: " + myOptions[i].getValueAsCLIString()); 
		}
		
		Options options = new Options();	
		
		for (Option option : myOptions) {
                options.addOption(option);
            }
			
		return options;
    }*/
	
	@Override
	public Options getOptions(){
		Option[] myOptions = {nominalEstimatorOption,numericEstimatorOption,maxByteSizeOption,leafpredictionOption};
		Options options = new Options();	
		
		for (Option option : myOptions) {
                options.addOption(option);
            }
			
		return options;
		
	}
	

    public IntOption maxByteSizeOption = new IntOption("maxByteSize", 'm',
            "Maximum memory consumed by the tree.", 33554432, 0,
            Integer.MAX_VALUE);

    /*
     * public MultiChoiceOption numericEstimatorOption = new MultiChoiceOption(
     * "numericEstimator", 'n', "Numeric estimator to use.", new String[]{
     * "GAUSS10", "GAUSS100", "GK10", "GK100", "GK1000", "VFML10", "VFML100",
     * "VFML1000", "BINTREE"}, new String[]{ "Gaussian approximation evaluating
     * 10 splitpoints", "Gaussian approximation evaluating 100 splitpoints",
     * "Greenwald-Khanna quantile summary with 10 tuples", "Greenwald-Khanna
     * quantile summary with 100 tuples", "Greenwald-Khanna quantile summary
     * with 1000 tuples", "VFML method with 10 bins", "VFML method with 100
     * bins", "VFML method with 1000 bins", "Exhaustive binary tree"}, 0);
     */
    public ClassOption numericEstimatorOption = new ClassOption("numericEstimator",
            'n', "Numeric estimator to use.", NumericAttributeClassObserver.class,
            "GaussianNumericAttributeClassObserver");
			
	GaussianNumericAttributeClassObserver numericEstimatorDefault = new GaussianNumericAttributeClassObserver();
	public int numericEstimatorOptionIndex=0; 

    public ClassOption nominalEstimatorOption = new ClassOption("nominalEstimator",
            'd', "Nominal estimator to use.", DiscreteAttributeClassObserver.class,
            "NominalAttributeClassObserver");
			
			

	// There is only 1 option for nominalEstimator

	NominalAttributeClassObserver nominalEstimatorDefault = new NominalAttributeClassObserver();
	public int nominalEstimatorOptionIndex=0; 


    public IntOption memoryEstimatePeriodOption = new IntOption(
            "memoryEstimatePeriod", 'e',
            "How many instances between memory consumption checks.", 1000000,
            0, Integer.MAX_VALUE);
	
	
	//	Tried removing intOption
	//public int memoryEstimatePeriodOption=0;

    public IntOption gracePeriodOption = new IntOption(
            "gracePeriod",
            'g',
            "The number of instances a leaf should observe between split attempts.",
            200, 0, Integer.MAX_VALUE);
			
	
	//	Tried removing intOption
	//public int gracePeriodOption = 0;

    public ClassOption splitCriterionOption = new ClassOption("splitCriterion",
            's', "Split criterion to use.", SplitCriterion.class,
            "InfoGainSplitCriterion");
			
			
	InfoGainSplitCriterion splitCriterionDefault = new InfoGainSplitCriterion();
	
	//Tried removing class option
	public int splitCriterionIndex=0;

    public FloatOption splitConfidenceOption = new FloatOption(
            "splitConfidence",
            'c',
            "The allowable error in split decision, values closer to 0 will take longer to decide.",
            0.0000001, 0.0, 1.0);
	

	//	Tried removing FloatOption
	//public float splitConfidenceOption = 0;


    public FloatOption tieThresholdOption = new FloatOption("tieThreshold",
            't', "Threshold below which a split will be forced to break ties.",
            0.05, 0.0, 1.0);
			
		
		
	//	Tried removing FloatOption
	//public float tieThresholdOption = 0;

public FlagOption binarySplitsOption = new FlagOption("binarySplits", 'b',
        "Only allow binary splits.");
		
	// Tried removing FlagOption
	//public boolean binarySplitsOption= false;

    public FlagOption stopMemManagementOption = new FlagOption(
            "stopMemManagement", 'z',
            "Stop growing as soon as memory limit is hit.");
	
	
		// Tried removing FlagOption
	//public boolean stopMemManagementOption=false;

    public FlagOption removePoorAttsOption = new FlagOption("removePoorAtts",
            'r', "Disable poor attributes.");
	
	// Tried removing FlagOption	
	//public boolean removePoorAttsOption = false;

    public FlagOption noPrePruneOption = new FlagOption("noPrePrune", 'p',
            "Disable pre-pruning.");
	
	// Tried removing FlagOption	
	//public boolean noPrePruneOption = false;
	
	public HoeffdingTree(){
		this.maxByteSizeOption.setValue(33554432);
		this.nominalEstimatorOptionIndex=0;
		this.splitCriterionIndex=0;
		this.memoryEstimatePeriodOption.setValue(1000000);
		this.gracePeriodOption.setValue(200);
		this.splitConfidenceOption.setValue(0.0f);
		this.tieThresholdOption.setValue(0.05f);
		this.binarySplitsOption.setValue(false);
		this.stopMemManagementOption.setValue(false);
		this.removePoorAttsOption.setValue(false);
		this.noPrePruneOption.setValue(false);
		this.leafpredictionOption.setChosenIndex(2);
		this.nbThresholdOption.setValue(0);

		


	}
	
		//public HoeffdingTree(int maxByteSize,int numericEstimator, int memoryEstimatePeriod, int gracePeriod, float splitConfidence, float tieThreshold, boolean binarySplits, boolean stopMemManagement, boolean removePoorAtts, boolean noPrePrune, int leafprediction, int nbThreshold){
	
	public HoeffdingTree(int maxByteSize,int numericEstimator, int splitCriterion, int memoryEstimatePeriod, int gracePeriod, float splitConfidence, float tieThreshold, boolean binarySplits, boolean stopMemManagement, boolean removePoorAtts, boolean noPrePrune, int leafprediction, int nbThreshold){
		if (maxByteSize > 0){
			this.maxByteSizeOption.setValue(maxByteSize);
		} else {
			System.out.println("Invalid maxByteSize");
		}
		
		
		if ((numericEstimator < 0) || (numericEstimator > 9)){
			System.out.println("Invalid numericEstimator");
			
		} else {
			this.numericEstimatorOptionIndex = numericEstimator;
		}
		
		if ((splitCriterion < 0) || (splitCriterion > 9)){
			System.out.println("Invalid splitCriterion");
			
		} else {
				this.splitCriterionIndex = splitCriterion;
		}
		
		
		if (memoryEstimatePeriod>=0){
			memoryEstimatePeriodOption.setValue(memoryEstimatePeriod);
		}
		else {
			System.out.println("Invalid memoryEstimatePeriod");
		}

		if (gracePeriod >= 0){
			this.gracePeriodOption.setValue(gracePeriod);

		}
		
		else{
			System.out.println("Invalid gracePeriod");

		}
		
		if ((splitConfidence > 1) || (splitConfidence < 0)){
			System.out.println("Invalid splitConfidence");
		
		}else {
			this.splitConfidenceOption.setValue(splitConfidence);
		}
		
		if ((tieThreshold > 1) || (tieThreshold < 0)){
			System.out.println("Invalid tieThreshold");
		
		}else {
			this.tieThresholdOption.setValue(tieThreshold);
		}
		
		this.binarySplitsOption.setValue(binarySplits);
		this.stopMemManagementOption.setValue(stopMemManagement);
		this.removePoorAttsOption.setValue(removePoorAtts);
		this.noPrePruneOption.setValue(noPrePrune);
		
		if ((leafprediction < 0 ) || (leafprediction > 2)){
			System.out.println("Invalid leafprediction option");
		
		} else{	
			this.leafpredictionOption.setChosenIndex(leafprediction);			
		}
		
		
		if (nbThreshold >= 0){
		this.nbThresholdOption.setValue(nbThreshold);

		}else{
			System.out.println("Invalid nbThreshold");
		}
		
		
		
	}

    public static class FoundNode {

        public Node node;

        public SplitNode parent;

        public int parentBranch;

        public FoundNode(Node node, SplitNode parent, int parentBranch) {
            this.node = node;
            this.parent = parent;
            this.parentBranch = parentBranch;
        }
    }

    public static class Node extends AbstractMOAObject {

        private static final long serialVersionUID = 1L;

        protected DoubleVector observedClassDistribution;

        public Node(double[] classObservations) {
            this.observedClassDistribution = new DoubleVector(classObservations);
        }

        public int calcByteSize() {
            return (int) (SizeOf.sizeOf(this) + SizeOf.fullSizeOf(this.observedClassDistribution));
        }

        public int calcByteSizeIncludingSubtree() {
            return calcByteSize();
        }

        public boolean isLeaf() {
            return true;
        }

        public FoundNode filterInstanceToLeaf(Instance inst, SplitNode parent,
                int parentBranch) {
            return new FoundNode(this, parent, parentBranch);
        }

        public double[] getObservedClassDistribution() {
            return this.observedClassDistribution.getArrayCopy();
        }

        public double[] getObservedClassDistributionAtLeavesReachableThroughThisNode() {
            return this.observedClassDistribution.getArrayCopy();
        }

        public double[] getClassVotes(Instance inst, HoeffdingTree ht) {
            return this.observedClassDistribution.getArrayCopy();
        }

        public boolean observedClassDistributionIsPure() {
            return this.observedClassDistribution.numNonZeroEntries() < 2;
        }

        public void describeSubtree(HoeffdingTree ht, StringBuilder out,
                int indent) {
            StringUtils.appendIndented(out, indent, "Leaf ");
            out.append(ht.getClassNameString());
            out.append(" = ");
            out.append(ht.getClassLabelString(this.observedClassDistribution.maxIndex()));
            out.append(" weights: ");
            this.observedClassDistribution.getSingleLineDescription(out,
                    ht.treeRoot.observedClassDistribution.numValues());
            StringUtils.appendNewline(out);
        }

        public int subtreeDepth() {
            return 0;
        }

        public double calculatePromise() {
            double totalSeen = this.observedClassDistribution.sumOfValues();
            return totalSeen > 0.0 ? (totalSeen - this.observedClassDistribution.getValue(this.observedClassDistribution.maxIndex()))
                    : 0.0;
        }

        @Override
        public void getDescription(StringBuilder sb, int indent) {
            describeSubtree(null, sb, indent);
        }
    }

    public static class SplitNode extends Node {

        private static final long serialVersionUID = 1L;

        protected InstanceConditionalTest splitTest;

        protected AutoExpandVector<Node> children; // = new AutoExpandVector<Node>();

        @Override
        public int calcByteSize() {
            return super.calcByteSize()
                    + (int) (SizeOf.sizeOf(this.children) + SizeOf.fullSizeOf(this.splitTest));
        }

        @Override
        public int calcByteSizeIncludingSubtree() {
            int byteSize = calcByteSize();
            for (Node child : this.children) {
                if (child != null) {
                    byteSize += child.calcByteSizeIncludingSubtree();
                }
            }
            return byteSize;
        }

        @Override
        public double[] getObservedClassDistributionAtLeavesReachableThroughThisNode() {
            // Start a new DoubleVector with 0 in all positions.
            DoubleVector sumObservedClassDistributionAtLeaves =
                    new DoubleVector(new double[this.getObservedClassDistribution().length]);

            for(Node childNode : this.children) {
                if(childNode != null) {
                    double[] childDist = childNode.getObservedClassDistributionAtLeavesReachableThroughThisNode();
                    sumObservedClassDistributionAtLeaves.addValues(childDist);
                }
            }
            return sumObservedClassDistributionAtLeaves.getArrayCopy();
        }

        public AutoExpandVector<Node> getChildren() {
            return children;
        }

        public InstanceConditionalTest getSplitTest() {
            return splitTest;
        }

        public SplitNode(InstanceConditionalTest splitTest,
                double[] classObservations, int size) {
            super(classObservations);
            this.splitTest = splitTest;
            this.children = new AutoExpandVector<Node>(size);
        }
        
        public SplitNode(InstanceConditionalTest splitTest,
                double[] classObservations) {
            super(classObservations);
            this.splitTest = splitTest;
            this.children = new AutoExpandVector<Node>();
        }


        public int numChildren() {
            return this.children.size();
        }

        public void setChild(int index, Node child) {
            if ((this.splitTest.maxBranches() >= 0)
                    && (index >= this.splitTest.maxBranches())) {
                throw new IndexOutOfBoundsException();
            }
            this.children.set(index, child);
        }

        public Node getChild(int index) {
            return this.children.get(index);
        }

        public int instanceChildIndex(Instance inst) {
            return this.splitTest.branchForInstance(inst);
        }

        @Override
        public boolean isLeaf() {
            return false;
        }

        @Override
        public FoundNode filterInstanceToLeaf(Instance inst, SplitNode parent,
                int parentBranch) {
            int childIndex = instanceChildIndex(inst);
            if (childIndex >= 0) {
                Node child = getChild(childIndex);
                if (child != null) {
                    return child.filterInstanceToLeaf(inst, this, childIndex);
                }
                return new FoundNode(null, this, childIndex);
            }
            return new FoundNode(this, parent, parentBranch);
        }

        @Override
        public void describeSubtree(HoeffdingTree ht, StringBuilder out,
                int indent) {
            for (int branch = 0; branch < numChildren(); branch++) {
                Node child = getChild(branch);
                if (child != null) {
                    StringUtils.appendIndented(out, indent, "if ");
                    out.append(this.splitTest.describeConditionForBranch(branch,
                            ht.getModelContext()));
                    out.append(": ");
                    StringUtils.appendNewline(out);
                    child.describeSubtree(ht, out, indent + 2);
                }
            }
        }

        @Override
        public int subtreeDepth() {
            int maxChildDepth = 0;
            for (Node child : this.children) {
                if (child != null) {
                    int depth = child.subtreeDepth();
                    if (depth > maxChildDepth) {
                        maxChildDepth = depth;
                    }
                }
            }
            return maxChildDepth + 1;
        }
    }

    public static abstract class LearningNode extends Node {

        private static final long serialVersionUID = 1L;

        public LearningNode(double[] initialClassObservations) {
            super(initialClassObservations);
        }

        public abstract void learnFromInstance(Instance inst, HoeffdingTree ht);
    }

    public static class InactiveLearningNode extends LearningNode {

        private static final long serialVersionUID = 1L;

        public InactiveLearningNode(double[] initialClassObservations) {
            super(initialClassObservations);
        }

        @Override
        public void learnFromInstance(Instance inst, HoeffdingTree ht) {
            this.observedClassDistribution.addToValue((int) inst.classValue(),
                    inst.weight());
        }
    }

    public static class ActiveLearningNode extends LearningNode {

        private static final long serialVersionUID = 1L;

        protected double weightSeenAtLastSplitEvaluation;

        protected AutoExpandVector<AttributeClassObserver> attributeObservers = new AutoExpandVector<AttributeClassObserver>();
        
        protected boolean isInitialized;

        public ActiveLearningNode(double[] initialClassObservations) {
            super(initialClassObservations);
            this.weightSeenAtLastSplitEvaluation = getWeightSeen();
            this.isInitialized = false;
        }

        @Override
        public int calcByteSize() {
            return super.calcByteSize()
                    + (int) (SizeOf.fullSizeOf(this.attributeObservers));
        }

        @Override
        public void learnFromInstance(Instance inst, HoeffdingTree ht) {
            if (this.isInitialized == false) {
                this.attributeObservers = new AutoExpandVector<AttributeClassObserver>(inst.numAttributes());
                this.isInitialized = true;
            }
            this.observedClassDistribution.addToValue((int) inst.classValue(),
                    inst.weight());
            for (int i = 0; i < inst.numAttributes() - 1; i++) {
                int instAttIndex = modelAttIndexToInstanceAttIndex(i, inst);
                AttributeClassObserver obs = this.attributeObservers.get(i);
                if (obs == null) {
                    obs = inst.attribute(instAttIndex).isNominal() ? ht.newNominalClassObserver() : ht.newNumericClassObserver();
                    this.attributeObservers.set(i, obs);
                }
                obs.observeAttributeClass(inst.value(instAttIndex), (int) inst.classValue(), inst.weight());
            }
        }

        public double getWeightSeen() {
            return this.observedClassDistribution.sumOfValues();
        }

        public double getWeightSeenAtLastSplitEvaluation() {
            return this.weightSeenAtLastSplitEvaluation;
        }

        public void setWeightSeenAtLastSplitEvaluation(double weight) {
            this.weightSeenAtLastSplitEvaluation = weight;
        }

        public AttributeSplitSuggestion[] getBestSplitSuggestions(
                SplitCriterion criterion, HoeffdingTree ht) {
            List<AttributeSplitSuggestion> bestSuggestions = new LinkedList<AttributeSplitSuggestion>();
            double[] preSplitDist = this.observedClassDistribution.getArrayCopy();
            if (!ht.noPrePruneOption.isSet()) {
                // add null split as an option
                bestSuggestions.add(new AttributeSplitSuggestion(null,
                        new double[0][], criterion.getMeritOfSplit(
                        preSplitDist,
                        new double[][]{preSplitDist})));
            }
            for (int i = 0; i < this.attributeObservers.size(); i++) {
                AttributeClassObserver obs = this.attributeObservers.get(i);
                if (obs != null) {
                    AttributeSplitSuggestion bestSuggestion = obs.getBestEvaluatedSplitSuggestion(criterion,
                            preSplitDist, i, ht.binarySplitsOption.isSet());
                    if (bestSuggestion != null) {
                        bestSuggestions.add(bestSuggestion);
                    }
                }
            }
            return bestSuggestions.toArray(new AttributeSplitSuggestion[bestSuggestions.size()]);
        }

        public void disableAttribute(int attIndex) {
            this.attributeObservers.set(attIndex,
                    new NullAttributeClassObserver());
        }
    }

    protected Node treeRoot;

    protected int decisionNodeCount;

    protected int activeLeafNodeCount;

    protected int inactiveLeafNodeCount;

    protected double inactiveLeafByteSizeEstimate;

    protected double activeLeafByteSizeEstimate;

    protected double byteSizeEstimateOverheadFraction;

    protected boolean growthAllowed;

    public int calcByteSize() {
        int size = (int) SizeOf.sizeOf(this);
        if (this.treeRoot != null) {
            size += this.treeRoot.calcByteSizeIncludingSubtree();
        }
        return size;
    }

    public int getNodeCount() {
        return this.decisionNodeCount + this.activeLeafNodeCount + this.inactiveLeafNodeCount;
    }

    public Node getTreeRoot() {
        return this.treeRoot;
    }

    @Override
    public int measureByteSize() {
        return calcByteSize();
    }

    @Override
    public void resetLearningImpl() {
        this.treeRoot = null;
        this.decisionNodeCount = 0;
        this.activeLeafNodeCount = 0;
        this.inactiveLeafNodeCount = 0;
        this.inactiveLeafByteSizeEstimate = 0.0;
        this.activeLeafByteSizeEstimate = 0.0;
        this.byteSizeEstimateOverheadFraction = 1.0;
        this.growthAllowed = true;
        if (this.leafpredictionOption.getChosenIndex()>0) { 
            this.removePoorAttsOption= null;
        }
    }

    @Override
    public void trainOnInstanceImpl(Instance inst) {
        if (this.treeRoot == null) {
            this.treeRoot = newLearningNode();
            this.activeLeafNodeCount = 1;
        }
        FoundNode foundNode = this.treeRoot.filterInstanceToLeaf(inst, null, -1);
        Node leafNode = foundNode.node;
        if (leafNode == null) {
            leafNode = newLearningNode();
            foundNode.parent.setChild(foundNode.parentBranch, leafNode);
            this.activeLeafNodeCount++;
        }
        if (leafNode instanceof LearningNode) {
            LearningNode learningNode = (LearningNode) leafNode;
            learningNode.learnFromInstance(inst, this);
            if (this.growthAllowed
                    && (learningNode instanceof ActiveLearningNode)) {
                ActiveLearningNode activeLearningNode = (ActiveLearningNode) learningNode;
                double weightSeen = activeLearningNode.getWeightSeen();
                if (weightSeen
                        - activeLearningNode.getWeightSeenAtLastSplitEvaluation() >= this.gracePeriodOption.getValue()) {
                    attemptToSplit(activeLearningNode, foundNode.parent,
                            foundNode.parentBranch);
                    activeLearningNode.setWeightSeenAtLastSplitEvaluation(weightSeen);
                }
            }
        }
        if (this.trainingWeightSeenByModel
                % this.memoryEstimatePeriodOption.getValue() == 0) {
            //  Method java.lang.instrument.Instrumentation.getObjectSize(Ljava/lang/Object;)J was not found
			//estimateModelByteSizes();
        }
    }

    @Override
    public double[] getVotesForInstance(Instance inst) {
        if (this.treeRoot != null) {
            FoundNode foundNode = this.treeRoot.filterInstanceToLeaf(inst,
                    null, -1);
            Node leafNode = foundNode.node;
            if (leafNode == null) {
                leafNode = foundNode.parent;
            }
            return leafNode.getClassVotes(inst, this);
          } else {
            int numClasses = inst.dataset().numClasses();
            return new double[numClasses];
          }
    }

    @Override
    protected Measurement[] getModelMeasurementsImpl() {
        return new Measurement[]{
                    new Measurement("tree size (nodes)", this.decisionNodeCount
                    + this.activeLeafNodeCount + this.inactiveLeafNodeCount),
                    new Measurement("tree size (leaves)", this.activeLeafNodeCount
                    + this.inactiveLeafNodeCount),
                    new Measurement("active learning leaves",
                    this.activeLeafNodeCount),
                    new Measurement("tree depth", measureTreeDepth()),
                    new Measurement("active leaf byte size estimate",
                    this.activeLeafByteSizeEstimate),
                    new Measurement("inactive leaf byte size estimate",
                    this.inactiveLeafByteSizeEstimate),
                    new Measurement("byte size estimate overhead",
                    this.byteSizeEstimateOverheadFraction)};
    }

    public int measureTreeDepth() {
        if (this.treeRoot != null) {
            return this.treeRoot.subtreeDepth();
        }
        return 0;
    }

    @Override
    public void getModelDescription(StringBuilder out, int indent) {
        this.treeRoot.describeSubtree(this, out, indent);
    }

    @Override
    public boolean isRandomizable() {
        return false;
    }

    public static double computeHoeffdingBound(double range, double confidence,
            double n) {
        return Math.sqrt(((range * range) * Math.log(1.0 / confidence))
                / (2.0 * n));
    }

    //Procedure added for Hoeffding Adaptive Trees (ADWIN)
    protected SplitNode newSplitNode(InstanceConditionalTest splitTest,
            double[] classObservations, int size) {
        return new SplitNode(splitTest, classObservations, size);
    }
    
    protected SplitNode newSplitNode(InstanceConditionalTest splitTest,
            double[] classObservations) {
        return new SplitNode(splitTest, classObservations);
    }
    

    protected AttributeClassObserver newNominalClassObserver() {
		 AttributeClassObserver nominalClassObserver =  (AttributeClassObserver) new NominalAttributeClassObserver();
        //AttributeClassObserver nominalClassObserver = (AttributeClassObserver) getPreparedClassOption(this.nominalEstimatorOption);
		 //Class java.io.ObjectOutputStream was not found
        //return (AttributeClassObserver) nominalClassObserver.copy();
		return (AttributeClassObserver) nominalClassObserver;
    }

    protected AttributeClassObserver newNumericClassObserver() {
		AttributeClassObserver numericClassObserver;
		switch (this.numericEstimatorOptionIndex){
			case 0:
				numericClassObserver =  new GaussianNumericAttributeClassObserver();
				break;
				
			case 1:
				numericClassObserver =  new BinaryTreeNumericAttributeClassObserver();
				break;
				
			case 3:
				numericClassObserver =  new FIMTDDNumericAttributeClassObserver();
				break;
			
			case 4:
				numericClassObserver =  new FIMTDDNumericAttributeClassLimitObserver();
				break;
			
			case 5:
				numericClassObserver =  new BinaryTreeNumericAttributeClassObserver();
				break;
				
			case 6:
				numericClassObserver =  new VFMLNumericAttributeClassObserver();
				break;
				
			case 7:
				numericClassObserver =  new IademGaussianNumericAttributeClassObserver();
				break;
				
			case 8:
				numericClassObserver =  new IademGreenwaldKhannaNumericAttributeClassObserver();
				break;
				
			case 9:
				numericClassObserver =  new IademVFMLNumericAttributeClassObserver();
				break;
				
			default:
				numericClassObserver =  new GaussianNumericAttributeClassObserver();
			
		}
        //AttributeClassObserver numericClassObserver = (AttributeClassObserver) getPreparedClassOption(this.numericEstimatorOption);
		return (AttributeClassObserver) numericClassObserver;
		//  Class java.io.ObjectOutputStream was not found
        //return (AttributeClassObserver) numericClassObserver.copy();
    }
	
	protected SplitCriterion pickSplitCriterion(){
		SplitCriterion chosenSplitCriterion;
		switch (this.splitCriterionIndex){
			case 0:
				chosenSplitCriterion =  new GiniSplitCriterion();
				break;
			case 1:
				chosenSplitCriterion =  new InfoGainSplitCriterion();
				break;
			case 2:
				chosenSplitCriterion = new InfoGainSplitCriterionMultilabel();
				break;
			case 3:
				chosenSplitCriterion = new SDRSplitCriterion();
				break;
			case 4:
				chosenSplitCriterion = new VarianceReductionSplitCriterion();
				break;
			case 5:
				chosenSplitCriterion = new SDRSplitCriterionAMRules();
				break;
			case 6:
				chosenSplitCriterion = new SDRSplitCriterionAMRulesNode();
				break;
			case 7:
				chosenSplitCriterion = new VRSplitCriterion();
				break;
			case 8:
				chosenSplitCriterion = new VarianceRatioSplitCriterion();
				break;
			default:
				chosenSplitCriterion = new InfoGainSplitCriterion();
				
		}
		return (SplitCriterion) chosenSplitCriterion;

	}

    protected void attemptToSplit(ActiveLearningNode node, SplitNode parent,
            int parentIndex) {
        if (!node.observedClassDistributionIsPure()) {
			//SplitCriterion splitCriterion = pickSplitCriterion();
            SplitCriterion splitCriterion = (SplitCriterion) getPreparedClassOption(this.splitCriterionOption);
            AttributeSplitSuggestion[] bestSplitSuggestions = node.getBestSplitSuggestions(splitCriterion, this);
            Arrays.sort(bestSplitSuggestions);
            boolean shouldSplit = false;
            if (bestSplitSuggestions.length < 2) {
                shouldSplit = bestSplitSuggestions.length > 0;
            } else {
                double hoeffdingBound = computeHoeffdingBound(splitCriterion.getRangeOfMerit(node.getObservedClassDistribution()),
                        this.splitConfidenceOption.getValue(), node.getWeightSeen());
                AttributeSplitSuggestion bestSuggestion = bestSplitSuggestions[bestSplitSuggestions.length - 1];
                AttributeSplitSuggestion secondBestSuggestion = bestSplitSuggestions[bestSplitSuggestions.length - 2];
                if ((bestSuggestion.merit - secondBestSuggestion.merit > hoeffdingBound)
                        || (hoeffdingBound < this.tieThresholdOption.getValue())) {
                    shouldSplit = true;
                }
                // }
                if ((this.removePoorAttsOption != null)
                        && this.removePoorAttsOption.isSet()) {
                    Set<Integer> poorAtts = new HashSet<Integer>();
                    // scan 1 - add any poor to set
                    for (int i = 0; i < bestSplitSuggestions.length; i++) {
                        if (bestSplitSuggestions[i].splitTest != null) {
                            int[] splitAtts = bestSplitSuggestions[i].splitTest.getAttsTestDependsOn();
                            if (splitAtts.length == 1) {
                                if (bestSuggestion.merit
                                        - bestSplitSuggestions[i].merit > hoeffdingBound) {
                                    poorAtts.add(new Integer(splitAtts[0]));
                                }
                            }
                        }
                    }
                    // scan 2 - remove good ones from set
                    for (int i = 0; i < bestSplitSuggestions.length; i++) {
                        if (bestSplitSuggestions[i].splitTest != null) {
                            int[] splitAtts = bestSplitSuggestions[i].splitTest.getAttsTestDependsOn();
                            if (splitAtts.length == 1) {
                                if (bestSuggestion.merit
                                        - bestSplitSuggestions[i].merit < hoeffdingBound) {
                                    poorAtts.remove(new Integer(splitAtts[0]));
                                }
                            }
                        }
                    }
                    for (int poorAtt : poorAtts) {
                        node.disableAttribute(poorAtt);
                    }
                }
            }
            if (shouldSplit) {
                AttributeSplitSuggestion splitDecision = bestSplitSuggestions[bestSplitSuggestions.length - 1];
                if (splitDecision.splitTest == null) {
                    // preprune - null wins
                    deactivateLearningNode(node, parent, parentIndex);
                } else {
                    SplitNode newSplit = newSplitNode(splitDecision.splitTest,
                            node.getObservedClassDistribution(),splitDecision.numSplits() );
                    for (int i = 0; i < splitDecision.numSplits(); i++) {
                        Node newChild = newLearningNode(splitDecision.resultingClassDistributionFromSplit(i));
                        newSplit.setChild(i, newChild);
                    }
                    this.activeLeafNodeCount--;
                    this.decisionNodeCount++;
                    this.activeLeafNodeCount += splitDecision.numSplits();
                    if (parent == null) {
                        this.treeRoot = newSplit;
                    } else {
                        parent.setChild(parentIndex, newSplit);
                    }
                }
                // manage memory
                enforceTrackerLimit();
            }
        }
    }

    public void enforceTrackerLimit() {
        if ((this.inactiveLeafNodeCount > 0)
                || ((this.activeLeafNodeCount * this.activeLeafByteSizeEstimate + this.inactiveLeafNodeCount
                * this.inactiveLeafByteSizeEstimate)
                * this.byteSizeEstimateOverheadFraction > this.maxByteSizeOption.getValue())) {
            if (this.stopMemManagementOption.isSet()) {
                this.growthAllowed = false;
                return;
            }
            FoundNode[] learningNodes = findLearningNodes();
            Arrays.sort(learningNodes, new Comparator<FoundNode>() {

                @Override
                public int compare(FoundNode fn1, FoundNode fn2) {
                    return Double.compare(fn1.node.calculatePromise(), fn2.node.calculatePromise());
                }
            });
            int maxActive = 0;
            while (maxActive < learningNodes.length) {
                maxActive++;
                if ((maxActive * this.activeLeafByteSizeEstimate + (learningNodes.length - maxActive)
                        * this.inactiveLeafByteSizeEstimate)
                        * this.byteSizeEstimateOverheadFraction > this.maxByteSizeOption.getValue()) {
                    maxActive--;
                    break;
                }
            }
            int cutoff = learningNodes.length - maxActive;
            for (int i = 0; i < cutoff; i++) {
                if (learningNodes[i].node instanceof ActiveLearningNode) {
                    deactivateLearningNode(
                            (ActiveLearningNode) learningNodes[i].node,
                            learningNodes[i].parent,
                            learningNodes[i].parentBranch);
                }
            }
            for (int i = cutoff; i < learningNodes.length; i++) {
                if (learningNodes[i].node instanceof InactiveLearningNode) {
                    activateLearningNode(
                            (InactiveLearningNode) learningNodes[i].node,
                            learningNodes[i].parent,
                            learningNodes[i].parentBranch);
                }
            }
        }
    }

    public void estimateModelByteSizes() {
        FoundNode[] learningNodes = findLearningNodes();
        long totalActiveSize = 0;
        long totalInactiveSize = 0;
        for (FoundNode foundNode : learningNodes) {
            if (foundNode.node instanceof ActiveLearningNode) {
                totalActiveSize += SizeOf.fullSizeOf(foundNode.node);
            } else {
                totalInactiveSize += SizeOf.fullSizeOf(foundNode.node);
            }
        }
        if (totalActiveSize > 0) {
            this.activeLeafByteSizeEstimate = (double) totalActiveSize
                    / this.activeLeafNodeCount;
        }
        if (totalInactiveSize > 0) {
            this.inactiveLeafByteSizeEstimate = (double) totalInactiveSize
                    / this.inactiveLeafNodeCount;
        }
        int actualModelSize = this.measureByteSize();
        double estimatedModelSize = (this.activeLeafNodeCount
                * this.activeLeafByteSizeEstimate + this.inactiveLeafNodeCount
                * this.inactiveLeafByteSizeEstimate);
        this.byteSizeEstimateOverheadFraction = actualModelSize
                / estimatedModelSize;
        if (actualModelSize > this.maxByteSizeOption.getValue()) {
            enforceTrackerLimit();
        }
    }

    public void deactivateAllLeaves() {
        FoundNode[] learningNodes = findLearningNodes();
        for (int i = 0; i < learningNodes.length; i++) {
            if (learningNodes[i].node instanceof ActiveLearningNode) {
                deactivateLearningNode(
                        (ActiveLearningNode) learningNodes[i].node,
                        learningNodes[i].parent, learningNodes[i].parentBranch);
            }
        }
    }

    protected void deactivateLearningNode(ActiveLearningNode toDeactivate,
            SplitNode parent, int parentBranch) {
        Node newLeaf = new InactiveLearningNode(toDeactivate.getObservedClassDistribution());
        if (parent == null) {
            this.treeRoot = newLeaf;
        } else {
            parent.setChild(parentBranch, newLeaf);
        }
        this.activeLeafNodeCount--;
        this.inactiveLeafNodeCount++;
    }

    protected void activateLearningNode(InactiveLearningNode toActivate,
            SplitNode parent, int parentBranch) {
        Node newLeaf = newLearningNode(toActivate.getObservedClassDistribution());
        if (parent == null) {
            this.treeRoot = newLeaf;
        } else {
            parent.setChild(parentBranch, newLeaf);
        }
        this.activeLeafNodeCount++;
        this.inactiveLeafNodeCount--;
    }

    protected FoundNode[] findLearningNodes() {
        List<FoundNode> foundList = new LinkedList<FoundNode>();
        findLearningNodes(this.treeRoot, null, -1, foundList);
        return foundList.toArray(new FoundNode[foundList.size()]);
    }
	
	

    protected void findLearningNodes(Node node, SplitNode parent,
            int parentBranch, List<FoundNode> found) {
        if (node != null) {
            if (node instanceof LearningNode) {
                found.add(new FoundNode(node, parent, parentBranch));
            }
            if (node instanceof SplitNode) {
                SplitNode splitNode = (SplitNode) node;
                for (int i = 0; i < splitNode.numChildren(); i++) {
                    findLearningNodes(splitNode.getChild(i), splitNode, i,
                            found);
                }
            }
        }
    }

    public MultiChoiceOption leafpredictionOption = new MultiChoiceOption(
            "leafprediction", 'l', "Leaf prediction to use.", new String[]{
                "MC", "NB", "NBAdaptive"}, new String[]{
                "Majority class",
                "Naive Bayes",
                "Naive Bayes Adaptive"}, 2);
	
	// Tried to remove multichoice option
	//public int leafpredictionOption = 2;

    public IntOption nbThresholdOption = new IntOption(
            "nbThreshold",
            'q',
            "The number of instances a leaf should observe before permitting Naive Bayes.",
            0, 0, Integer.MAX_VALUE);
			
	// Tried to remove IntOption
	//public int nbThresholdOption = 0;

    public static class LearningNodeNB extends ActiveLearningNode {

        private static final long serialVersionUID = 1L;

        public LearningNodeNB(double[] initialClassObservations) {
            super(initialClassObservations);
        }

        @Override
        public double[] getClassVotes(Instance inst, HoeffdingTree ht) {
            if (getWeightSeen() >= ht.nbThresholdOption.getValue()) {
                return NaiveBayes.doNaiveBayesPrediction(inst,
                        this.observedClassDistribution,
                        this.attributeObservers);
            }
            return super.getClassVotes(inst, ht);
        }

        @Override
        public void disableAttribute(int attIndex) {
            // should not disable poor atts - they are used in NB calc
        }
    }

    public static class LearningNodeNBAdaptive extends LearningNodeNB {

        private static final long serialVersionUID = 1L;

        protected double mcCorrectWeight = 0.0;

        protected double nbCorrectWeight = 0.0;

        public LearningNodeNBAdaptive(double[] initialClassObservations) {
            super(initialClassObservations);
        }

        @Override
        public void learnFromInstance(Instance inst, HoeffdingTree ht) {
            int trueClass = (int) inst.classValue();
            if (this.observedClassDistribution.maxIndex() == trueClass) {
                this.mcCorrectWeight += inst.weight();
            }
            if (Utils.maxIndex(NaiveBayes.doNaiveBayesPrediction(inst,
                    this.observedClassDistribution, this.attributeObservers)) == trueClass) {
                this.nbCorrectWeight += inst.weight();
            }
            super.learnFromInstance(inst, ht);
        }

        @Override
        public double[] getClassVotes(Instance inst, HoeffdingTree ht) {
            if (this.mcCorrectWeight > this.nbCorrectWeight) {
                return this.observedClassDistribution.getArrayCopy();
            }
            return NaiveBayes.doNaiveBayesPrediction(inst,
                    this.observedClassDistribution, this.attributeObservers);
        }
    }

    protected LearningNode newLearningNode() {
        return newLearningNode(new double[0]);
    }

    protected LearningNode newLearningNode(double[] initialClassObservations) {
        LearningNode ret;
        int predictionOption = this.leafpredictionOption.getChosenIndex();
        if (predictionOption == 0) { //MC
            ret = new ActiveLearningNode(initialClassObservations);
        } else if (predictionOption == 1) { //NB
            ret = new LearningNodeNB(initialClassObservations);
        } else { //NBAdaptive
            ret = new LearningNodeNBAdaptive(initialClassObservations);
        }
        return ret;
    }

    /*@Override
    public ImmutableCapabilities defineImmutableCapabilities() {
      if (this.getClass() == HoeffdingTree.class)
        return new ImmutableCapabilities(Capability.VIEW_STANDARD, Capability.VIEW_LITE);
      else
        return new ImmutableCapabilities(Capability.VIEW_STANDARD);
    }*/
}
