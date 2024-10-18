import { MissionUtils } from "@woowacourse/mission-utils"; 
class App {
  async receiveInput() {
    return await MissionUtils.Console.readLineAsync();
  }

  getDelimiter(str) {
    let delimiter = /,|:/;
    if (str.startsWith("//")) {
      const [_, customDelimiter] = str.match(/\/\/(.*?)\\n/);
      delimiter = new RegExp(/,|:/.source + '|' + customDelimiter);
    }
    return delimiter;
  }

  getNumbers(str, delimiter) {
    if (str.startsWith("//")) {
      const [_, numbers] = str.split("\\n"); 
      return numbers.split(delimiter); 
    }
    return str.split(delimiter); 
  }

  getSum(numbers) {
    return numbers.reduce((total, num) => total + Number(num), 0);
  }

  async run() {
    const str = await this.receiveInput();
    const delimiter = this.getDelimiter(str);
    const numbers = this.getNumbers(str, delimiter);
    const sum = this.getSum(numbers);
    MissionUtils.Console.print(sum);
  }
}

export default App;