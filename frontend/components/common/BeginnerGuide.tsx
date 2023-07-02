const BeginnerGuide = () => (
  <div className="flex flex-col p-4 gap-y-4">
    <h1 className="text-3xl font-bold">초보자 장비 가이드 📚</h1>
    <section>
      <h2 className="text-2xl font-bold">라켓 🏸</h2>
      <h3 className="mt-2 font-bold">가장 좋은 경우 ⭐</h3>
      <ul className="pl-4 list-disc">
        <li>라켓을 무료로 얻을 수 있는 경우</li>
        <li>5만원 미만으로 라켓을 구할 수 있는 경우</li>
      </ul>
      <h3 className="mt-2 font-bold">무게</h3>
      <p>현재 나오는 라켓 무게는 대표적으로 3가지 (3U, 4U, 5U) 입니다.</p>
      <p>
        처음 입문하시는 분이라면
        <strong className="text-blue-500"> 4U</strong>를 추천드립니다.
      </p>
      <h3 className="mt-2 font-bold">밸런스 포인트</h3>
      <p>밸런스 포인트도 3가지가 있습니다.</p>
      <p>
        처음 입문하시는 분이라면
        <strong className="text-blue-500"> 이븐 발란스</strong> 또는
        <strong className="text-blue-500"> 헤드 라이트</strong>를 추천드립니다.
      </p>

      <h3 className="mt-2 font-bold">샤프트 탄성</h3>
      <p>샤프트 탄성도 3가지가 있습니다.</p>
      <p>
        처음 입문하시는 분이라면
        <strong className="text-blue-500"> 미디엄</strong> 또는
        <strong className="text-blue-500"> 플렉시블</strong>을 추천드립니다.
      </p>

      <h3 className="mt-2 font-bold">추천 라켓</h3>
      <ul className="pl-4 list-disc">
        <li>
          <a
            target="_blank"
            href="https://smartstore.naver.com/spoyoung/products/4823038649"
            rel="noreferrer"
          >
            플렉스파워 넥서스 700RP : 39000원
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://smartstore.naver.com/badmintonmania/products/4886812035"
            rel="noreferrer"
          >
            아펙스 나노퓨전스피드 725 : 55000원
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.yonexmall.com/shop/goods/goods_view.php?goodsno=5910&category=001001"
            rel="noreferrer"
          >
            요넥스 나노플레어 270 : 130000원
          </a>
        </li>
      </ul>
    </section>
  </div>
);
export default BeginnerGuide;
