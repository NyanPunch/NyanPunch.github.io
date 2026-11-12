---
title: "데이터를 보기 전에 확인하는 것들"
description: "분석을 시작하기 전에 점검할 데이터의 구조와 품질, 그리고 자주 놓치는 포인트를 정리합니다."
date: 2026-11-02
category: "데이터 분석"
tags: ["Pandas", "데이터 품질", "탐색적 분석"]
sample: true
---

그래프를 그리기 전에 데이터가 무엇을 나타내는지 확인하면 잘못된 해석을 줄일 수 있습니다. 아래 코드는 `orders.csv`라는 주문 데이터를 가정한 예시입니다. 실제 데이터의 열 이름과 업무 규칙에 맞춰 수정해야 합니다.

## 한 행의 의미 정하기

한 행이 주문 한 건인지, 상품 한 종류인지, 하루의 집계인지 먼저 확인합니다. 주문 번호가 중복되어도 한 주문에 여러 상품이 포함된 데이터라면 정상일 수 있습니다.

```python
import pandas as pd

df = pd.read_csv("orders.csv")
print(df.shape)
print(df.head())
print(df.dtypes)
```

분석 대상 기간, 수집 방법, 집계 단위도 함께 기록합니다.

## 결측값의 이유 확인하기

```python
missing = df.isna().mean().sort_values(ascending=False)
print(missing)
```

결측값을 바로 0으로 채우기 전에 의미를 확인합니다. '매출이 없음'과 '매출을 수집하지 못함'은 서로 다른 상황입니다. 빈 문자열이나 `-` 같은 표시가 결측값으로 인식되지 않았을 수도 있습니다.

## 중복과 자료형 점검하기

```python
print("완전히 동일한 행:", df.duplicated().sum())

# 아래 열 이름은 예시 데이터의 스키마를 가정합니다.
df["ordered_at"] = pd.to_datetime(df["ordered_at"], errors="coerce")
df["amount"] = pd.to_numeric(df["amount"], errors="coerce")
print(df[["ordered_at", "amount"]].isna().sum())
```

변환에 실패한 값은 `NaT` 또는 `NaN`이 됩니다. 변환 후 결측값이 늘었다면 원본 값을 살펴보고 형식이나 단위를 확인합니다.

## 이상치를 업무 규칙과 비교하기

음수 금액이 있다고 무조건 오류는 아닙니다. 취소나 환불일 수 있습니다. 반대로 큰 금액이 정상처럼 보여도 통화 단위가 섞인 문제일 수 있습니다.

| 점검 대상 | 확인할 질문 |
| --- | --- |
| 금액 | 통화와 부가세 포함 기준이 같은가? |
| 시간 | 시간대가 통일되어 있는가? |
| 취소·환불 | 매출 계산에 어떤 방식으로 반영되는가? |
| 식별자 | 주문과 상품을 구분할 수 있는가? |

## 전처리의 근거 남기기

원본은 보존하고, 어떤 행을 제외하거나 값을 바꿨는지 기록합니다. 같은 분석을 다시 실행했을 때 같은 결과를 얻을 수 있어야 합니다.

처음부터 모든 문제를 해결할 필요는 없습니다. 분석 목적에 영향을 주는 문제를 먼저 찾고, 해결되지 않은 한계는 결과와 함께 설명하면 됩니다.

## 참고 자료

- [pandas 공식 문서: Working with missing data](https://pandas.pydata.org/docs/user_guide/missing_data.html)
