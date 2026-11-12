---
title: "Python 프로젝트 환경을 관리하는 방법"
description: "가상환경, 의존성 기록, 재현 가능한 실행 환경을 만드는 작은 습관들을 정리합니다."
date: 2026-11-06
category: "Python"
tags: ["Python", "venv", "개발 환경"]
sample: true
---

프로젝트마다 사용하는 라이브러리 버전이 다르면 전역 환경에 모든 패키지를 설치하기 어렵습니다. Python에 포함된 `venv`로 프로젝트별 환경을 분리하고 필요한 의존성을 기록할 수 있습니다.

## 가상환경 만들기

프로젝트 루트에서 다음 명령을 실행합니다.

```bash
python -m venv .venv
```

`.venv`는 가상환경 폴더 이름입니다. 환경 자체는 버전 관리에 포함하지 않습니다.

```text
.venv/
__pycache__/
```

## 환경 활성화하기

macOS와 Linux에서는 다음 명령을 사용합니다.

```bash
source .venv/bin/activate
```

Windows PowerShell에서는 다음 명령을 사용합니다. 실행 정책 때문에 차단된다면 조직의 정책에 맞춰 설정하거나, 활성화 없이 `.venv\Scripts\python.exe`를 직접 실행할 수 있습니다.

```powershell
.\.venv\Scripts\Activate.ps1
```

가상환경의 Python을 사용 중인지 확인합니다.

```bash
python -c "import sys; print(sys.executable)"
```

## 의존성 기록하기

패키지를 설치할 때 `python -m pip` 형식을 쓰면 현재 Python 인터프리터에 연결된 pip를 사용한다는 점이 명확해집니다.

```bash
python -m pip install pandas
python -m pip freeze > requirements.txt
```

`pip freeze`는 현재 환경에 설치된 패키지를 기록합니다. 실험용 패키지까지 포함될 수 있으므로, 프로젝트마다 별도의 깨끗한 환경을 쓰는 편이 좋습니다.

## 다른 컴퓨터에서 재현하기

```bash
python -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
```

패키지 버전 외에 Python 버전과 운영체제도 결과에 영향을 줍니다. README에 사용한 Python 버전, 실행 명령, 필요한 환경변수 이름을 함께 적어 두세요. 비밀번호나 토큰 값은 저장소에 올리지 않습니다.

## 프로젝트가 커진다면

간단한 프로젝트는 `venv`와 `requirements.txt`로 시작해도 충분합니다. 의존성 그룹, 잠금 파일, 패키지 배포가 필요해지면 uv나 Poetry 같은 도구를 검토할 수 있습니다.

중요한 것은 도구의 수보다 새 환경에서 설치와 실행을 재현할 수 있는지 확인하는 일입니다.

## 참고 자료

- [Python 공식 문서: venv](https://docs.python.org/3/library/venv.html)
- [pip 공식 문서: Requirements File Format](https://pip.pypa.io/en/stable/reference/requirements-file-format/)
