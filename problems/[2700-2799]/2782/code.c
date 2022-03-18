#include <stdio.h>
#include <stdlib.h>

unsigned stepLadder(int *, unsigned short);

int main() {
  unsigned short size, i;

  scanf("%hu", &size);

  int sequence[size];

  for (i = 0; i < size; ++i) {
    scanf("%d", &sequence[i]);
  };

  printf("%u\n", stepLadder(sequence, size));

  return 0;
};

unsigned stepLadder(int *sequence, unsigned short size) {
  unsigned short i;
  int before = sequence[0] - sequence[1], current, quantity = 1;

  if (size == 1 || size == 2) {
    return 1;
  };

  for (i = 2; i < size; ++i) {
    current = sequence[i - 1] - sequence[i];

    if (current != before) {
      before = current;
      quantity++;
    };
  };

  return quantity;
};