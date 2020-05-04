const main = document.querySelector("main");

class FormattedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  onTextChange = (e) => {
    this.setState({ value: e.target.value });
    console.log(this.state);
  };
  render() {
    return (
      <React.Fragment>
        <section id={this.props.id}>
          <h2>{this.props.title}</h2>
          <div className="form-group">
            <Cleave
              className="form-control"
              onKeyDown={this.onTextChange}
              options={this.props.option}
              placeholder={this.props.placeholder}
              type="text"
              value={this.state.value}
            />
          </div>
        </section>
        <hr />
      </React.Fragment>
    );
  }
}

const Formatedinputs = [
  {
    id: "creditcard",
    title: "Credit Number",
    placeholder: "xxxx xxxx xxxx xxxx",
    option: {
      creditCard: true,
    },
  },
  {
    id: "phone",
    title: "Phone Number",
    placeholder: "91 9190 9190",
    option: {
        blocks: [2,4,4],
        delimiter: " ",
    },
  },
  {
    id: "date",
    title: "Date Input",
    placeholder: "DD-MM-YYYY",
    option: {
      date: true,
      delimiter: "-",
      datePattern: ["d", "m", "Y"],
    },
  },
  {
    id: "monthyear",
    title: "Date in MM/YY",
    placeholder: "MM/YY",
    option: {
      date: true,
      delimiter: "/",
      datePattern: ["m", "y"],
    },
  },
  {
    id: "customBlock",
    title: "Custom BLock Input",
    placeholder: "____-___",
    option: {
      blocks: [5, 3],
      delimiter: "-",
    },
  },
  {
    id: "customDeliminator",
    title: "Custom Input with Custom Delimitor",
    placeholder: "XX.XXX.XXX/XXXX-XX",
    option: {
      blocks: [2, 3, 3, 4, 2],
      delimiters: [".", ".", "/", "-"],
    },
  },
];

let i = 1;
const elements = Formatedinputs.map((element) => (
  <FormattedInput
    key={i++}
    id={element.id}
    title={element.title}
    placeholder={element.placeholder}
    option={element.option}
  />
));

ReactDOM.render(<div>{elements}</div>, main);
