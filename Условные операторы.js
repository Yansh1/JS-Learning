// Покупка хлеба
// Купи батон хлеба. Если будут яйца — купи десяток.

// Функция покупки хлеба
function buyABread(number) 
{
	return number;
}

// Флаг, которые говорит, есть ли в магазине яйца
var eggAreThere = true;

// Если яйца есть, купить десяток батонов
if (eggAreThere) // Условные оператор	
{					// Блок кода
	buyABread(10);
}
// ИЛИ
else 
{
	buyABread(1);
}
