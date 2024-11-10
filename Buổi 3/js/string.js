//! String có 2 cách khai báo:
var firstName = "Châu"; // Type: String
var lastName = new String("Diep"); //  Type: Object

//! Nối chuỗi: Nếu 1 trong 2 vế không phải là số -> Có thể nối chuỗi
console.log(`Tôi là ${firstName} ${lastName}`); // Template string
console.log((firstName + " " + lastName)); // Concatenate

//! Backlash (\) - Dùng để chèn  các ký tự đặc biệt: \n, \t, \", \\
console.log("Đây là dấu \n \t \"Backlash\"");

//! Hàm hỗ trợ:
 //* 1. Find index (indexOf)
 console.log("mai ngọc châu".indexOf("ọ"));
 console.log()

 //* 2. Find last index (lastIndexOf)
 console.log("mai ngọc châu".lastIndexOf("c"));
 console.log()

 //* 3. Search (search)
 console.log("mai ngọc châu".search("c"));
 console.log()

 //* 4. Cắt chuỗi (slice)
 console.log("mai ngọc châu".slice(0, 3));
 console.log()

 //* 5. Replace (replace) và Replace all (replaceAll)
 console.log()
 console.log("Bạn thua rồi:) haha haha");
 console.log("Bạn thua rồi:) haha haha".replace("haha", "\"hoho\""));
 console.log("Bạn thua rồi:) haha haha".replaceAll("haha", "\"hoho\""));

 //* 6. upperCase (toUpperCase) | lowerCase (toLowerCase)
 console.log()
 console.log("mai ngọc châu".toUpperCase());
 console.log("MAI NGỌC CHÂU".toLowerCase());

 //* 7. Trim
 console.log()
 console.log("\"   mai ngọc châu   \"");
 console.log(`"${"   mai ngọc châu   ".trim()}"`);

 //* 8. Split (String -> Array)
 console.log()
 console.log("mai ngọc châu".split(""));

 //* 9. Lấy một ký tự theo index
  //* Trả về chuỗi rỗng "" nếu index > length
    console.log(firstName.charAt(15));
  //* Trả về undefined nếu index > length
    console.log(lastName[3]);

 //* 10. Toán tử 3 ngôi
 let a = 10;
 let ngoi = a ? "true" : "false"; 
  // ngoi = <điều kiện> ? <đúng thì> : <sai thì>;
 console.log(ngoi);