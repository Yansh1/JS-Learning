// Циклический алгоритм
// Найти периметр многоугольника.

// Алгоритм:
// найти сумму всех сторон

var polygonSides = [10, 20, 30, 40, 30, 20, 10]; // Массив — сложный тип данных, позволяющий хранить несколько связанных значений вместе.
// Доступ к элементам массива производится по ключу.
var polygonPerimeter = 0; // Индексы начинаются с нуля

for (var i = 0; i < polygonSides.length; i++) 
{
	polygonPerimeter += polygonSides[i]; // i - индекс элемента
}
// var i; = 0 - счетчик
// i < polygonSides.length; - условие завершения цикла (до тех пор, пока условие = true)
// polygonSides.length = колиство значений массива
// i++ - закон изменения (7)