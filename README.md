# beforeunload sample

beforeunloadイベントの挙動を検証するためのアプリです。

## TOBE

call "form.submit()" with "beforeunload" eventListener.
popup dialog "leap this screen, OK?". 
select "no", close dialog and not leap.
never popup dialog twice.

## How to run?

```
mvn clean spring-boot:run
```

## Specification

### Get all customers

access `<BaseUrl>/customers`

### Create customer

in the customer list, input forms and push `作成` button.

### Update customer

in the customer list, push `編集` button and move edit screen.
so input forms and push `更新` button.

### Delete customer

in the customer list, push `削除` button.

