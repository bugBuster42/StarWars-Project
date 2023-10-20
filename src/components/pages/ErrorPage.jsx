import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-44 text-white">
      <img
        className="max-w-md rounded"
        src="https://media2.giphy.com/media/jd6TVgsph6w7e/giphy.gif?cid=ecf05e47pkcrf1gbayrwbg6h9ot8ewxgj5tf3sql0xaqer44&ep=v1_gifs_search&rid=giphy.gif&ct=g"
        alt="Star Wars"
      />
      <h1 className="my-4 text-3xl font-bold">Oops!</h1>
      <p className="mb-4 text-lg">{"The force isn't with you.."}</p>
      <p className="italic">your error is: 404 - NotFound</p>
      <Link to="/">
        <p className="mt-4 font-bold text-yellow-400 hover:text-yellow-200">
          Comeback to the galaxy
        </p>
      </Link>
    </div>
  );
};

export default ErrorPage;
