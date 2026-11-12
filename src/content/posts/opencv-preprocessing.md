---
title: "OpenCV로 시작하는 이미지 전처리"
description: "노이즈 제거부터 이진화까지, 직접 실행해 볼 수 있는 이미지 전처리의 기본 흐름을 정리합니다."
date: 2026-11-10
category: "컴퓨터 비전"
tags: ["OpenCV", "Python", "이미지 처리"]
cover: "/images/vision.svg"
sample: true
---

이미지를 모델에 넣기 전, 데이터의 형태와 품질을 먼저 확인하는 일이 중요합니다. 이 글에서는 OpenCV로 이미지를 읽고 그레이스케일 변환, 노이즈 제거, 이진화까지 수행하는 기본 흐름을 소개합니다.

## 실행 환경 준비

Python 가상환경을 만들고 OpenCV를 설치합니다. 아래 명령은 macOS와 Linux 기준입니다. Windows에서는 `source` 대신 `.venv\Scripts\activate`로 가상환경을 활성화할 수 있습니다.

```bash
python -m venv .venv
source .venv/bin/activate
python -m pip install opencv-python
```

프로젝트 폴더에 처리할 이미지 `sample.jpg`를 준비합니다. 다른 파일을 사용한다면 아래 코드의 파일 경로를 바꿔 주세요.

## 이미지 읽기와 색 공간 확인

OpenCV의 `imread`는 일반적인 컬러 이미지를 BGR 채널 순서로 읽습니다. RGB를 기본으로 사용하는 도구와 함께 쓸 때는 채널 순서에 주의해야 합니다.

```python
import cv2

image = cv2.imread("sample.jpg")
if image is None:
    raise FileNotFoundError("sample.jpg 파일을 확인해 주세요.")

gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
print("컬러 이미지:", image.shape)
print("그레이스케일:", gray.shape)
```

그레이스케일 변환은 색 정보를 줄이고 밝기 중심으로 처리할 때 유용합니다. 색 자체가 중요한 작업이라면 컬러 정보를 유지하는 편이 좋습니다.

## Gaussian Blur로 노이즈 완화하기

미세한 잡음은 임계값 처리나 윤곽선 검출 결과에 영향을 줄 수 있습니다. Gaussian Blur는 주변 픽셀을 가중 평균해 이미지를 부드럽게 만듭니다.

```python
blurred = cv2.GaussianBlur(gray, (5, 5), 0)
```

커널 크기는 양의 홀수로 지정합니다. 너무 큰 커널은 작은 글자나 얇은 경계까지 흐리게 만들 수 있으므로 원본과 결과를 함께 비교합니다.

## Otsu 방식으로 이진화하기

이진화는 픽셀을 두 값으로 나누는 처리입니다. Otsu 방식은 이미지의 히스토그램을 바탕으로 임계값을 계산합니다.

```python
threshold, binary = cv2.threshold(
    blurred,
    0,
    255,
    cv2.THRESH_BINARY + cv2.THRESH_OTSU,
)
print("계산된 임계값:", threshold)
if not cv2.imwrite("binary.png", binary):
    raise OSError("결과 이미지를 저장하지 못했습니다.")
```

밝기 분포가 두 집단으로 나뉘는 이미지에서 좋은 출발점이 됩니다. 조명이 고르지 않거나 그림자가 큰 이미지라면 적응형 이진화도 비교해 볼 수 있습니다.

## 결과를 비교할 때 확인할 것

- 관심 있는 대상의 경계와 작은 특징이 유지되는가?
- 배경의 잡음이 줄었는가?
- 서로 다른 조명 조건의 이미지에서도 비슷하게 동작하는가?
- 다음 단계의 검출이나 인식 성능이 실제로 좋아졌는가?

> 전처리 방법을 정답처럼 고정하기보다, 실제 입력 이미지와 다음 단계의 목적에 맞춰 선택하세요.

전처리 결과가 시각적으로 깔끔하더라도 모델의 성능이 개선된다는 보장은 없습니다. 대표 이미지를 모아 같은 조건에서 비교하고, 최종 작업의 평가 지표로 확인하는 것이 좋습니다.

## 참고 자료

- [OpenCV 공식 문서: 이미지 임계값 처리](https://docs.opencv.org/4.x/d7/d4d/tutorial_py_thresholding.html)
- [OpenCV 공식 문서: 이미지 스무딩](https://docs.opencv.org/4.x/d4/d13/tutorial_py_filtering.html)
