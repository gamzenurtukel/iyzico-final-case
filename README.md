# Iyzico Final Case

Proje ant design kullanılarak tasarlanmıştır.Sayfa yönlendirmeleri için react-router-dom kullanılmıştır.State management için redux ve rudux toolkit araçları kullanılmıştır.Swapi Api işlemleri axios ile yapılmıştır.

# Home Page

Burada sayfa ilk açıldığında home sayfası görüntülenmektedir ve hoşgeldiniz yazısı ve lottie starwars animasyonu yer almaktadır.
Sayfayı aşağı indirilmesine karşın menü üst kısma sabitlenmiştir.Menüde Starships List'e tıklandığında starships liste sayfasına gitmektedir.Sayfa tasarımında layout içinde header ve content olarak tasarlanmıştır.Sayfa değiştiğinde sadece content kısmı değilmektedir.

![home-1](./src/screenshots/home_page.png?raw=true)

# Starships List Page

Bu sayfada starships listesi model, name ve rate değerleri swapi api'sini kullanılarak listelenmiştir.Sayfa ilk açıldığında swapi api'sinden gelen birinci sayfa starships listelemektedir.

![starshipslist-1](./src/screenshots/starships_list.png?raw=true)

Load More butonuna tıklandığında ikici,üçüncü ve dördüncü sayfa starships listelemektedir.

![starshipslist-2](./src/screenshots/starships_list1.png?raw=true)

Listelenen starships detail'a tıklandığında tıklanan starship'in detay sayfasına yönlendiriliyor.

# Starships Search Bar
 
 Aramak istenilen starships search bar'a yazıldığında name ve model değerlerine göre starships listeleniyor.
 Aşağıda search bar'a "corvette" değeri girilmiş ve bu değere sahip starships listelenmiştir.

 ![search-1](./src/screenshots/search_bar1.png?raw=true)
 
 Search bar'a "star" değeri girilmiş ve bu değere sahip starships listelenmiştir.

![search-2](./src/screenshots/search_bar.png?raw=true)


# Starships List Details Page

Starships list sayfasında listelenen starship verilerinden detail'a tıklandığında ilgili starship verisinin name,model ve diğer değerleri bu sayfada kart şeklinde görüntülenerek tasarlanmıştır.Go to back butonu ile starships list sayfasına geri dönmektedir.

![detail-2](./src/screenshots/detail_page.png?raw=true)

# Not Found Page

Path name değeri yanlış girildiğinde not found sayfası gelmektedir.Sayfa lottie animasyonu ile tasarlanmıştır.

![notfound-1](./src/screenshots/not_found.png.png?raw=true)