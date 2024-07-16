## 학습 목표

javascript의 역사와 실행 방법을 익힙니다.

## 목차

- [js의 역사](#js의-역사)
- [js 실행 방법](#js-실행-방법)
  - [실행 방법](#실행-방법)
  - [외부 스크립트](#외부-스크립트)
  - [내부 스크립트](#내부-스크립트)
- [변수 선언 방식](#변수-선언-방식)
- [예약어 / 키워드](#예약어--키워드)

## js의 역사

1993 → 모자이크 브라우저 등장 {팀 버너스리(웹의 아버지)}: 최초의 UI 웹 브라우저

1994 → 모자이크 브라우저 개발자 2명이 넷스케이프 설립 → 넷스케이프 내비게이터 출시

1994.09 → 동적인 웹브라우저를 적용하기 위해 스크립팅 언어 개발 필요성 느낌 ⇒ 10일 만에 **live script**개발 ⇒ 넷스케이프에 적용

> 브랜딩을 위해 live script ⇒ java script로 이름 변경 (자바가 유명해서 이름 차용)

1995 → 마이크로소프트에서 웹 브라우저 개발 → 네스케이프 내비게이터를 리버스 엔지리어링 ⇒ 인터넷 익스플로어 출시(JScript)

1996 → 모든 웹 페이지에 내비게이터 설치 or 익스플로러 설치 필수 안내(경쟁)

> 당시 웹 브라우저에서 내비게이터가 90% 점유율 차지

1996.09 → EcmaScript International에서 javascript를 웹 표준으로 제안

1997 → EcmaScript1 출시 (ES1) [ms는 카피를 인정하고 표준을 적용해야 했음]

1998 → EcmaScript2 출시

1999 → EcmaScript3 출시

2000 → EcmaScript4 출시(거절됨)

> 당시 익스플로러 99% 점유율로 독자적인 길을 가기로 결정
>
> > 윈도우에 IE가 자동 설치됐으며, 내비게이터는 유료였음

> 이후로는 ms를 따르게 됨. ms가 표준 작업을 허용하지 않아 웹 표준이 없었음

2004 → 파이어폭스 브라우저 탄생 <액션 스크립트3 + 타마린 엔진>

> 멈췄던 표준 작업을 액션 스크립트로 재표준화 하는 작업 제안 거절됨 (js랑 너무 달라..)

> 익스플로러 vs 내비게이터 vs 파이어폭스 ⇒ 웹 표준 정의를 위한 경쟁

> 그 결과 하나의 웹 페이지를 개발하면 3개 이상의 웹 브라우저에 맞춰야 했음

> 모든 웹 브라우저에서 잘 동작하는 인터페이스 “**jQuery”(2006)**의 등장
>
> > 모두가 jQuery 사용함 ⇒ 모든 웹 브라우저 호환성 + 무료

2008 → 크롬의 등장(최초로 JIT 엔진 탑재)

> 구글 크롬, 익스플로러, 파이어폭스의 협의 끝에 웹 표준 작업으로 효율적인 웹 브라우저 개발

**2009 → 표준화 작업 재개 EcmaScript 5 출시 → es5 or es2009 → js 골격 세움**

**2015 → EcmaScript 6 → es6 → 골격을 토대로 엄청난 발전 → 2021부터 완전 적용됨**

2016 → es7

2017 → es8

…

2023 → es14 매년 꾸준히 출시되고 있음

# js 실행 방법

## 실행 방법

1. terminal에서 node 명령어 사용

   ```bash
   node <filename>
   ```

2. code runner 사용
3. html 파일에서 script태그 사용
   1. 외부 스크립트
   2. 내부 스크립트
4. 브라우저 개발자 도구 console에 입력

## 외부 스크립트

```jsx
<script src="main.js"></script>
```

실무에서 주로 사용하는 방법

### 실행 문제

> 웹 브라우저는 html 파일을 첫 번째 줄부터 파싱

> html 파싱 멈추고 js 파싱 진행( fetching<로드> / executing<실행>)

> js 파싱 되는 동안 뒷 코드가 실행되지 않음 → 화면이 그려지지 않음

### 문제 해결 방법

1. **body 태그 가장 밑에 script 태그 추가** ⇒ 일단 눈에 보이니 js가 얼마에 걸려 로딩되든 체감 못함 (가장 고전적인 방식)

   ```html
   <body>
     ...
     <script src="main.js"></script>
   </body>
   ```

2. **async** 사용

   ```html
   <script async src="main.js"></script>
   ```

   > 파싱하다가 멈추지 않고 html 파싱 지속하면서 동시에 병렬로 js fetching 진행

   > executing 시작하면 html 파싱 멈춤
   >
   > > js 파일이 매우 클 떄 1번은 크게 문제해결에 도움이 안됨 ⇒ 그나마 fetching을 동시에 할 수 있다는 장점있음 **(순서 보장이 안되기 때문에 순서가 중요한 경우 단점)**

3. **defer** 사용

   ```html
   <script defer src="main.js"></script>
   ```

   > html 파싱과 fetching을 동시에 병렬로 처리하고 html 파싱이 끝난 후 executing 진행

   > fetching과 execution이 모두 순차적으로 진행됨 → async 단점 보완

## 내부 스크립트

```
<script>
	var str = "Hello, World!";
	console.log(str);
</script>
```

# 변수 선언 방식

1. var

   사용하면 안되는 이유

   ```jsx
   // a.js
   var num = 10;

   // b.js
   var num = 30

   // index.html
   <script src="a.js"></script>
   <script src="b.js"></script>
   <script>
   	console.log(num);
   </script>

   result => 30
   ```

   보통 다수의 js 파일을 불러올텐데 **동일한 이름의 변수를 사용할 때 값이 덮어 쓰여지는 문제**가 발생할 수 있는데 **개발자는 이를 인지할 수 없음**

2. let: 재할당 가능 변수

   ```jsx
   // a.js
   var num = 10;

   // b.js
   var num = 30

   // index.html
   <script src="a.js"></script>
   <script src="b.js"></script>
   <script>
   	console.log(num);
   </script>

   result => 식별자 중복 에러 출력 10
   ```

   > 개발자가 동명 변수의 존재를 인지할 수 있음

   > 동일한 이름의 변수를 만들지 못할 뿐 값을 변경할 수 있음

3. const: **재할당 불가 변수**

   > 상수가 아닌 이유는 “변하지 않는 수”가 아니기 때문

   예) array를 할당할 경우 array 값을 추가/삭제 등을 할 수 있기 때문

# 예약어 / 키워드

1. var / let / const : 변수 공간 만들어주는 예약어
2. num, str, …: **식별자**
   1. const / let + **num**: **변수명**
3. function: 함수 키워드
   1. function + **sum**: **함수명**
4. 연산자
   1. 산술 연산자
   2. 대입 연산자
5. 할당
   1. 대입 연산자로 값을 할당
6. 표현식
   1. 20 + 30 : 값으로 추론될 수 있는 하나의 식
7. 값
   1. 더 이상 계산될 수 없는 순수 데이터
