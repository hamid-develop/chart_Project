import "./chartWrapper.css"
import PieChart from "../pie-chart/PieChart";
import BarChart from "../bar-chart/BarChart";


const ChartWrapper = ({showPieChart, showBarChart}) => {
    return ( 
        <div>
            {showPieChart && <PieChart /> }
            {showBarChart && <BarChart /> }
        </div>
     );
}
 
export default ChartWrapper;