export function Header() {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <div className="space-x-2 text-blueGray-light">
          <span>Source:</span>
          <a
            href="https://www.facebook.com/100050186212776/posts/pfbid08kibVooUgdRwAn2LjWSRjzVJ5wzvjYncGqP2XvvR8vC9SYPqqH86HZ3uTZGqesy2l/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            王介立醫師
          </a>
        </div>
      </div>

      <div className="text-blueGray">計算你的健康指標</div>

      <div className=" text-2xl font-black uppercase text-teal md:text-5xl">Body Composition</div>
    </div>
  );
}