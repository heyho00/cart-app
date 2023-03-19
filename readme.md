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
