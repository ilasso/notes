#include <stdio.h>
#include <stdlib.h>
#include <emscripten/emscripten.h>
#include <time.h>

int main(int argc, char ** argv) {
    printf("WebAssembly module loadedn");
}

int EMSCRIPTEN_KEEPALIVE roll_dice() {
    srand ( time(NULL) );
    return rand() % 6 + 1;
}
