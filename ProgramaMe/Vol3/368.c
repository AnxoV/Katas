#include <stdio.h>
#include <string.h>
#include <math.h>

int huevos(int n, int c);

int main() {
    int num1;
    int num2;
    int output[50];
    
    int c = 0;
    int i;

    do {
        scanf("%d %d", &num1, &num2);
        *(output + c++) = huevos(num1, num2);
    } while (num1 != 0 && num2 != 0);

    for (i = 0; i < c-1; i++) {
        printf("%d\n", output[i]);
    }

    return 0;
}

int huevos(int n, int c) {
    if (c == 0) return 0;
    return floor(n/c)*10 + ((n>=c) ? (n%c)*10 : 10);
}