---
title: Coding
---


## jwt
จะอยู่ภายใต้ package th.go.moph.jwt
จะเป็นเรื่องเกี่ยวกับ authen ทั้งหมด
การจัดการ user 
การจัดการ role


## class พื้นฐานของ app ทั่วไป
จะอยู่ภายใต้ package th.go.moph.app
- เก็บ log การเรียกใช้งาน api
- app change log เป็น log เกี่ยวกับการอัฟเดท app
- database chang log ใช้ในการ updateฐานข้อมูลทั้งส่วนของโครงสร้าง และข้อมูล


## class พื้นฐานของ app นี้
จะอยู่ภายใต้ package th.go.moph.main
เช่น
- AmpurController
- ChangwatController
- TambonControler


## class ที่เกี่ยวข้องกับ app นี้โดยตรง
จะอยู่ภายใต้ package th.go.moph.t8data
- บันทึก t8
- อ่านค่า aot