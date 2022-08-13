import Login from "../Login";

function Header() {
  return (
    <>
      <div className="text-blueGray-light flex space-x-5">
        Source:
        <a
          href="https://www.facebook.com/100050186212776/posts/pfbid08kibVooUgdRwAn2LjWSRjzVJ5wzvjYncGqP2XvvR8vC9SYPqqH86HZ3uTZGqesy2l/"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          王介立醫師
        </a>
        <Login/>
      </div>

      <div className="text-blueGray">計算你的基礎代謝率</div>
    </>
  );
}

export default Header;
