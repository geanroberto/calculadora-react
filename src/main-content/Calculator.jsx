import '../style/Calculator.css'
import Button from '../Components/Buttons'
import Display from '../Components/Display'

const Calculator = () => {
  return(
    <>
      <h1>Calculator</h1>
      <div className="calculator">
        <Display/>
        <Button value={"CLEAR ALL"} threeCol/>
        <Button value={"/"} operation/>
        <Button value={7}/>
        <Button value={8}/>
        <Button value={9}/>
        <Button value={"x"} operation/>
        <Button value={4}/>
        <Button value={5}/>
        <Button value={6}/>
        <Button value={"-"} operation/>
        <Button value={1}/>
        <Button value={2}/>
        <Button value={3}/>
        <Button value={"+"} operation/>
        <Button value={0} twoCol/>
        <Button value={"."}/>
        <Button value={"="} operation/>
      </div>
    </>
  )
}

export default Calculator;