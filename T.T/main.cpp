#include <iostream> 
using namespace std;
 
int faktorial(int n){
    int out=1;
    for(int i=1;i<=n;i++)
        out*=i;
    return out;
}
 
int main()
{
    setlocale(0,"");
    int n,k;
    cout << "Введите n и k через пробел:";
    cin >> n >> k;
    cout << faktorial(n)*faktorial(k) * faktorial(n-k);
    return 0;
}