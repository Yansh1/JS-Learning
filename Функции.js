// Исходные данные
var time = 3;
var speedOfFirst =12;
var speedOfSecond= 14;

// Часть, которая будет повторяться вне зависимости от исходных данных — функция
function calculateTotalDistance(time, speedOfFirst, speedOfSecond) // Параметры
{
// Алгоритм
// 1. Найти расстояние, которое проехал первый
var distanceOfFirst = speedOfFirst * time;

// 2. Найти расстояние, которое проехал второй
var distanceOfSecond = speedOfSecond * time;

// 3. Сложить полученные расстояния
var totalDistance = distanceOfFirst + distanceOfSecond;
return totalDistance; // Возвращаемое значение
}


calculateTotalDistance (3, 12, 14); // Вызов функции с передачей параметров
calculateTotalDistance (2, 12, 14);	 	