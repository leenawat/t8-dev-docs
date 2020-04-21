# T8 Dev Documents

ขั้นตอนการเขียนโปรแกรม จนถึง นำไปรันบนเซิร์ฟเวอร์
## Flow 
From Developing to Run on Production Sever
1. developer write code
2. developer push code to gitlab
3. gitlab using ci-cd (gitlab auto)
     - test using junit 
     - build image 
     - push image to dockerhup registry
4. server (manual pull and run) 
     - pull using docker 
     - run using docker-compose

