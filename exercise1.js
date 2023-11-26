public class exercise1 {
    public static void main(String[] args){
        int[] myList = {3,9,0,1,7};

        //print the elements of an array
        System.out.println("Please input 5 integers: ");
        for(int elem:myList)
            System.out.print(elem + " ");
        System.out.println();

        System.out.println("The original array is: ");
        for(int i = 0; i< myList.length; i++){
            System.out.print(myList[i] + " ");
        }
        System.out.println();

        System.out.println("After swap, the array is: ");
        int temp = myList[0];//Retain the first element
        // Shift elements left
        for(int i = 1; i < myList.length;i++){
            myList[i - 1] = myList[i];
        }

        //Move the first element to fill in the last position
        myList[myList.length - 1] = temp;

        for(int elem:myList)
            System.out.print(elem + " ");
        System.out.println();

    }
}
