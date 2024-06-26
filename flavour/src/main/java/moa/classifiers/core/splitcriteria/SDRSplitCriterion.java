/*
 *    SDRSplitCriterion.java
 *    Copyright (C) 2013 University of Porto, Portugal
 *    @author Katie de Lange, E. Almeida, J. Gama
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
 *    
 */

/* Project Knowledge Discovery from Data Streams, FCT LIAAD-INESC TEC, 
 *
 * Contact: jgama@fep.up.pt
 */

package moa.classifiers.core.splitcriteria;

//Additional import
import com.github.javacliparser.Options;
import com.github.javacliparser.Option;

public class SDRSplitCriterion extends VarianceReductionSplitCriterion {
	private static final long serialVersionUID = 1L;
	
	 @Override
	public Options getOptions(){
	   
	   Option[] myOptions = new Option[0];
		Options options = new Options();	
		
		for (Option option : myOptions) {
                options.addOption(option);
            }
			
		return options;
	}

	public static double computeSD(double[] dist) {
    	int N = (int)dist[0];
        double sum = dist[1];
        double sumSq = dist[2];
        return Math.sqrt((sumSq - ((sum * sum)/N))/N);
    }

}