# Cart app

커밋으로 정리. 순서대로 보면 됨.

## Cart 도메인 모델 작성

- Cart.test.ts도 작성

- Item 모델도 작성

## Store

react component와 도메인 모델을 연결해주기 위해선 store가 필요하다.

- stores/CartStore.ts 생성

- stores/CartStore.test.ts 생성

## 추상화 레벨이 안맞아 리팩토링 진행

- CartStore.ts/takeSnapshot 부분

- useCartStore 에서 쓰기위해 CartStoreSnapshot 타입 정의해 export 한다.

- useCartStore/snapshot 부분 타입에러. 이따처리함.

## components들의 주석 해제

- Cart.tsx

- Products.tsx

- 물론 App.tsx에서도

주석을 모두 풀어서

스토어를 연결해서 실제 동작하도록 해보자.

주석을 다 풀었는데 안나옴 ;;

아까부터 빨간불인 snapshot이 문제일까. 일단 보이지않아서

## 우선 CartStore 내부에 중복을 제거하기위해 Store 추상 클래스를 만들면서

살펴보기로 한다.

1. Store로 기반 클래스를 뺐다.

2. CartStore는 확 줄었다.
