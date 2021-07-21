# Focus (2021.03 - 2021.05)

![focus](https://user-images.githubusercontent.com/52441478/126422451-bd5ad780-d494-4050-abc2-35f62594de53.png)

## 1. Summary

코로나 팬데믹 사태로 기존의 강의체계가 대부분 온라인 비대면 강의로 전환되었다. 이에 따라 Host와 Guest의 원활한 교류 및 수업 참여 집중도가 기존 대면 강의에 비해 상당히 저조해 졌다는 것을 몸소 느꼈고 본 프로젝트에서는 이를 개선해보고자 “이미지 딥러닝을 활용한 수업 집중도 향상 플랫폼”을 개발하게 되었다.

<br>

## 2. Main features

#### 1) 실시간 얼굴인식을 통한 출석체크 기능

-> 등록한 사용자의 이미지를 학습하여, 현재 수업을 듣고 있는 Guest가 해당 사용자가 맞는지 확인하고 자동으로 출석체크

<br>

#### 2) 졸음 감지 기능

-> 실시간 Vision System에 Guest의 얼굴 및 안구를 검출하는 기법으로, 사용자가 졸고 있는지를 확인

<br>

#### 3) 수업 태도 분석 기능

-> Guest가 강의를 듣는 자세를 토대로 수업 태도를 분석

<br>

#### 4) 로그 저장 기능

-> Guest가 수업을 듣는 도중에 졸음 시간, 자리 비움 시간을 로그로 저장하여 해당 수업을 복습할 시에 도움이 되도록 데이터를 제공

<br>

#### 5) 팝업 알림 기능

-> Guest가 수업 도중에 졸거나, 수업 태도가 일정 기준 이하로 떨어지면 해당 Guest에게 팝업 알림 전송, 또한 수업을 듣는 Guest들 전체의 데이터를 평균 내어 Host에게 주기적으로 팝업 알림 전송

<br>

## 3. Project Demo Video

https://softcon.ajou.ac.kr/works/works.asp?uid=416

<br>

## 4. How to run

```
# go to directory
$ cd /ProjectFrontend

# install dependencies
$ npm install
$ yarn install

# running localhost 3000 port
$ npm run dev

# build for production and launch server
$ npm run build && npm start

```
