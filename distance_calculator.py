
import math 

# import math diyerek matematik kütüphanesinden yaralanıcaz.
# alternatif olarak bunu kullanmadan **0.5 üs kullanabilirdik aşağıdaki gibi ;
# return ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5 

def euclidean_distance(point1, point2):
    x1, y1 = point1
    x2, y2 = point2
    return math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

points = [(1, 2), (4, 6), (7, 8), (2, 1)]

distance = [] # Boş bir liste oluşturalım ki, buraya mesafeleri kaydedelim
for i in range(len(points)): # her nokta için döngü başlatmalıyız
    for j in range(i + 1, len(points)): # i nin bi sonraki elemanından başlayacak bi dönge (içiçe döngü) kurduk
        distance.append(euclidean_distance(points[i], points[j])) # iki nokta arasındaki mesafeyi hesaplayıp, listemize ekliyoruz

min_distance = min(distance)
print("Minimum Öklid Mesafesi:", min_distance)
