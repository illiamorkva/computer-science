// good explanation - https://www.youtube.com/watch?v=8LusJS5-AGo&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8
// JS implementation - https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/knapsack-problem
// Java implementation - https://www.geeksforgeeks.org/knapsack-problem/
// DP intro explanation in russian - https://habr.com/post/113108/

/**
 * Time Complexity.
 * O(n * w),
 * where n is the number of items and w is the capacity of knapsack
 * 
 */
class ZeroOneKnapsack {
  /**
   * @param {KnapsackItem[]} possibleItems 
   * @param {number} weightLimit 
   */
  constructor(possibleItems, weightLimit) {
    this.selectedItems = [];
    this.weightLimit = weightLimit;
    this.possibleItems = possibleItems;
  }

  sortPossibleItemsByWeight() {
    this.possibleItems = new MergeSort({  
      /**
       * @var {KnapsackItem} itemA
       * @var {KnapsackItem} itemB
       */
      compareCallback: (itemA, itemB) => {
        if (itemA.weight === itemB.weight) {
          return 0;
        }

        return itemA.weight < itemB.weight ? -1 : 1;
      },
    })
    .sort(this.possibleItems);
  }

  sortPossibleItemsByValue() {
    this.possibleItems = new MergeSort({  
      /**
       * @var {KnapsackItem} itemA
       * @var {KnapsackItem} itemB
       */
      compareCallback: (itemA, itemB) => {
        if (itemA.value === itemB.value) {
          return 0;
        }

        return itemA.value > itemB.value ? -1 : 1;
      },
    })
    .sort(this.possibleItems);
  }

  solveZeroOneKnapsackProblem() {
    // we do two sorts because in case of equal weights but different values
    // we need to take the most valuable items first
    this.sortPossibleItemsByValue();
    this.sortPossibleItemsByWeight();

    this.selectedItems = new Array();

    // create knapsack values matrix
    const numberOfRows = this.possibleItems.length;
    const numberOfColumns = this.weightLimit;
    const knapsackMatrix = new Array(numberOfRows)
      .fill(null)
      .map(() => {
        return new Array(numberOfColumns + 1)
          .fill(null);
      }
    );
    
    // fill the first column with zeros since it would mean that there is
    // no items we can add to knapsack in case if weight limitation is zero
    for (let itemIndex = 0; itemIndex < this.possibleItems.length; itemIndex++) {
      knapsackMatrix[itemIndex][0] = 0;
    }

    // fill the first row with max possible values we would get by just adding
    // or not adding the first item to the knapsack
    for (let weightIndex = 1; weightIndex <= this.weightLimit; weightIndex++) {
      const itemIndex = 0;
      const itemWeight = this.possibleItems[itemIndex].weight;
      const itemValue = this.possibleItems[itemIndex].value;
      knapsackMatrix[itemIndex][weightIndex] = itemWeight <= weightIndex ? itemWeight : 0;
    }

    // go through combinations of how we may add items to knapsack and
    // define what weight/value we would receive using Dynamic Programming
    // approach
    for (let itemIndex = 1; itemIndex < this.possibleItems.length; itemIndex++) {
      for (let weightIndex = 1; weightIndex <= this.weightLimit; weightIndex++) {

        const currentItemWeight = this.possibleItems[itemIndex].weight;
        const currentItemValue = this.possibleItems[itemIndex].value;

        if (currentItemWeight > weightIndex) {
          // in case if item's weight is bigger then currently allowed weight
          // then we can't add it to knapsack and the max possible value we can
          // gain at the moment is the max value we got for previous item
          knapsackMatrix[itemIndex][weightIndex] = knapsackMatrix[itemIndex - 1][weightIndex];
        } else {
          // else we need to consider the max value we can gain at this point by adding
          // current value or just by keeping the previous item for current weight
          knapsackMatrix[itemIndex][weightIndex] = Math.max(
            currentItemValue + knapsackMatrix[itemIndex - 1][weightIndex - currentItemWeight],
            knapsackMatrix[itemIndex - 1][weightIndex],
          );
        }

      }
    }

    // now let's trace back the knapsack matrix to see what items we're going to add
    // to the knapsack
    let itemIndex = this.possibleItems.length - 1;
    let weightIndex = this.weightLimit;

    while (itemIndex > 0) {
      const currentItem = this.possibleItems[itemIndex];
      const prevItem = this.possibleItems[itemIndex - 1];

      // check if matrix value came from top (from previous item)
      // in this case this would mean that we need to include previous item
      // to the list of selected items
      if (
        knapsackMatrix[itemIndex][weightIndex] &&
        knapsackMatrix[itemIndex][weightIndex] === knapsackMatrix[itemIndex - 1][weightIndex]
      ) {
        // check if there are several items with the same weight but with the different values
        // we need to add highest item in the matrix that is possible to get the highest value
        const prevSumValue = knapsackMatrix[itemIndex - 1][weightIndex];
        const prevPrevSumValue = knapsackMatrix[itemIndex - 2][weightIndex];
        if (
          !prevPrevSumValue ||
          (prevSumValue && prevPrevSumValue !== prevSumValue)
        ) {
          this.selectedItems.push(prevItem);
        }
      } else if (knapsackMatrix[itemIndex - 1][weightIndex - currentItem.weight]) {
        this.selectedItems.push(prevItem);
        weightIndex -= currentItem.weight;
      }

      itemIndex--;
    }
  }
}

// TODO: impelement KnapsackItem - https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sets/knapsack-problem/KnapsackItem.js
