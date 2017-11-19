// Рекурсия и циклические алгоритмы
// Почистить все апельсины на столе.

var orangesLeft = 3;

//Рекурсия
// Алгоритм
function peelNextOrange()
{
// 1. Взять апельсин со стола
// 2. Почистить его
// 3. Убрать тарелку
orangeLeft -= 1; // Вычитание с присвоением. То же самое orangeLeft = orangeLeft - 1;
// 4. Если есть еще апельсины - повторить
if (orangesLeft > 0)
{
	peelNextOrange(); // Рекурсия — вызов функции из нее самой.
}
}

peelNextOrange;
orangeLeft; // 0

// Цикл
// Алгоритм
function peelOranges()
{
// 1. Взять апельсин со стола
// 2. Почистить его
// 3. Убрать тарелку
// 4. Если есть еще апельсины - повторить
while (orangesLeft > 0) // Цикл - условие повторяется до тех пор, пока условие = true 
{
	orangesLeft -= 1;
}
}

peelNextOrange;
orangeLeft; // 0

