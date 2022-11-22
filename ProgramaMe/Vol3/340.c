#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int cerillas(int n, int m);

int main() {
    int nPruebas;
    scanf("%d", &nPruebas);
    
    int i = 0;

    char* input[50];
    int* output = (int*) malloc(sizeof(int)*nPruebas);
    
    char* token;

    int buffer[2];
    int bi;
    while (i < nPruebas) {
        bi = 0;
        scanf("\n%[^\n]", input);
        token = strtok(input, " ");
        while (token) {
            *(buffer + bi++) = (int) strtol(token, NULL, 10);
            token = strtok(NULL, " ");
        }
        *(output + i++) = cerillas(buffer[0], buffer[1]);
    }
    for (i = 0; i < nPruebas; i++) {
        printf("%d\n", output[i]);
    }

    return 0;
}

int cerillas(int n, int m) {
    return 2*n+2*m+n*(m-1)+m*(n-1);
}