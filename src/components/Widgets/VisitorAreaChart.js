/**
 * Visitor Area Chart Widget
 */
import React from 'react';
import CountUp from 'react-countup';

// chart
import TinyAreaChart from 'Components/Charts/TinyAreaChart';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// rct card box
import { RctCard, RctCardContent } from 'Components/RctCard';

// chart config
import ChartConfig from 'Constants/chart-config';

// helpers
import { hexToRgbA } from 'Helpers/helpers';

const VisitorAreaChart = ({ data }) => (
    <RctCard>
        <RctCardContent>
            <div className="clearfix">
                <div className="float-left">
                    <h3 className="mb-15 fw-semi-bold"><IntlMessages id="widgets.visitors" /></h3>                  
                </div>
                <div className="float-right hidden-md-down">
                    <div className="featured-section-icon">
                        <i className="zmdi zmdi-globe-alt"></i>
                    </div>
                </div>
            </div>
        </RctCardContent>
        <TinyAreaChart
            label="Visitors"            
            backgroundColor={hexToRgbA(ChartConfig.color.primary, 0.1)}
            borderColor={hexToRgbA(ChartConfig.color.primary, 3)}
            lineTension="0"
            height={70}
            gradient
            hideDots
        />
    </RctCard >
);

export default VisitorAreaChart;
