window.addEventListener("load", () => {
	//Masonry 레이아웃(Isotope 플러그인 이용)
	var iso = new Isotope("section", {
		// options
		itemSelector: "article",
	});

	const filterBtn = document.querySelectorAll(".btns>li"); // '.btn>li' 들을 변수에

	for (let el of filterBtn) {
		// 배열 filterBtn 의 아이템(갯수)만큼 반복
		el.addEventListener("click", (e) => {
			e.preventDefault();

			// 클릭을 할 때, 각 아이템(버튼)에 반복 , on클래스 제거
			for (let el of filterBtn) {
				el.classList.remove("on");
			}

			// 클릭한 버튼에 on클래스 삽입
			e.currentTarget.classList.add("on");

			// 클릭한 버튼에 있는 a태그 내 속성 href의 value값을 가져온다.
			const filtering = e.currentTarget.querySelector("a").getAttribute("href");

			iso.arrange({ filter: filtering }); // 버튼을 누르면 필터링 작동(플러그인)
		});
	}

	// 각 aritcle을 클릭하면 팝업창 표시
	const items = document.querySelectorAll("article"); // 각 article들을 변수에(배열)
	const pop = document.querySelector("#popup");

	for (const aa of items) {
		aa.addEventListener("click", (e) => {
			// 화면 너비
			const winWidth = document.body.clientWidth;

			if (winWidth > 767) {
				// 화면 너비가 767px보다 컸을 때 적용
				// 클릭한 article img의 src값, h2, p를 변수에 저장
				const img = e.currentTarget.querySelector("img").getAttribute("src");
				const title = e.currentTarget.querySelector("h2").innerText;
				const desc = e.currentTarget.querySelector("p").innerText;

				// popup에 위의 변수를 적용
				pop.querySelector("img").setAttribute("src", img);
				pop.querySelector("h2").innerText = title;
				pop.querySelector("p").innerText = desc;

				pop.classList.add("on");
			}
		});
	}

	// popup창 클릭 시, popup 제거
	pop.addEventListener("click", () => {
		pop.classList.remove("on");
	});

	// popup창 표시된 상태에서 윈도우 창 조절 시, popup창 제거
	window.addEventListener("resize", () => {
		pop.classList.remove("on");
	});
});
