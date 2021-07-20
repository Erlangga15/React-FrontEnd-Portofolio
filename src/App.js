import logo from './logo.svg';
import './App.css';
import ReviewBox from './Review';
import PropTypes from 'prop-types';

function App() {
  return (
    <div className="Parent-box">
      <ProductImage />
      <ProductInfo
        title="React"
        price="12.0000.000"
        info="This is react logo"
        isDiscount="yes"
      />
      <ReviewBox />
    </div>
  );
}

//* Function Component
function ProductImage() {
  return (
    <div className="Photo">
      <img src="logo192.png" alt="logo-react" />
    </div>
  );
}

function ProductInfo(props) {
  const { title, price } = props;
  const pros = ['Declarative', 'Component-Based', 'Learn Once, Write Anywhere'];

  const listPros = pros.map((item) => {
    return <li key={item}>{item}</li>;
  });

  return (
    <div className="Description">
      <p className="Cate">Logo</p>
      <h1 className="Title">{title}</h1>
      <p className="Price">IDR {price}</p>
      <CheckDiscount isDiscount={props.isDiscount} discount={50} />
      <p className="Info">{props.info}</p>
      <ul>{listPros}</ul>
      <a onClick={(e) => AddCart(title)} href="#">
        Add to Cart
      </a>
    </div>
  );
}

//* Function Conditional
function CheckDiscount(props) {
  if (props.isDiscount === 'yes') {
    return <p>Diskon {props.discount}% Off</p>;
  } else if (props.isDiscount === 'comming') {
    return <p>Akan ada diskon ...</p>;
  } else {
    return <p>Belum ada diskon</p>;
  }
}

//* Function Event
function AddCart(name) {
  console.log(`Product ${name} Added ....`);
}

//* Generate PropTypes
CheckDiscount.propTypes = {
  discount: PropTypes.number.isRequired,
};

export default App;
