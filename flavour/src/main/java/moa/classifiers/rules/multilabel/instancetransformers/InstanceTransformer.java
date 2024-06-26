/*
 *    InstanceTransformer.java
 *    Copyright (C) 2017 University of Porto, Portugal
 *    @author J. Duarte, J. Gama
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 *
 *
 */

package moa.classifiers.rules.multilabel.instancetransformers;

import moa.core.MOAObject;

import com.yahoo.labs.samoa.instances.Instance;
import com.yahoo.labs.samoa.instances.Prediction;

/**
 * Interface for instance transformation
 *
 * @author João Duarte (joaomaiaduarte@gmail.com)
 */

public interface InstanceTransformer extends MOAObject{
	
	public Instance sourceInstanceToTarget(Instance sourceInstance);
	public Prediction targetPredictionToSource(Prediction targetPrediction);

}
