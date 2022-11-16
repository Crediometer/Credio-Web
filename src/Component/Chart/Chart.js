import {Line} from "react-chartjs-2";
import { Chart as ChartJS} from "chart.js/auto";
const Chart = ({chartData}) => {
    return (
        <Line data={chartData} ></Line>
    );
}
 
export default Chart;