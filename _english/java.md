---
layout: post
lang: en
permalink: /en/2019/03/13/java/
translation: /2019/03/13/java/
title: "A Simple Array Manager in Java"
description: "A Java console exercise that stores integers, inserts values at a specified position, and finds multiples of three."
date: 2019-03-13 15:14:54
categories: [Program]
author: JoeZhang
mathjax: false
tags: [Java]
---

## Requirements

Build a simple array manager that can enter and display integers, insert an integer at a chosen position, and find values divisible by three.

The exercise calls for a class named `DataManage` with these methods:

- `public int[] insertData()` reads the initial entries.
- `public void showData(int[] a, int length)` displays the array.
- `public void insertAtArray(int[] a, int n, int k)` inserts value `n` at position `k`.
- `public void divThree(int[] a)` displays values divisible by three.
- `public void notice()` shows the menu.
- The `main` method runs the console program.

## Java example

```java
package com.imooc.test;
import java.util.Scanner;
// Display the menu
public class Test {
    public void notic() {
        System.out.println("******************************");
        System.out.println("      1 - Enter values");
        System.out.println("      2 - Show all values");
        System.out.println("      3 - Insert a value at a position");
        System.out.println("      4 - Find multiples of three");
        System.out.println("      0 - Exit");
        System.out.println("******************************");
        System.out.println("Choose a menu option.");
    }
    // Read the initial values
    public static void insertData(int[] a) {
        Scanner sc=new Scanner(System.in);
        for(int i=0;i<a.length-1;i++) {
            System.out.println("Enter value "+(i+1)+".");
            a[i]=sc.nextInt();
        }
    }
    // Show all values
    public static void showData(int[] a,int length) {
        for (int i=0;i<a.length;i++) {
            System.out.print(a[i]+"  ");
        }
        System.out.println();
    }
    // Insert a value at a position
    public static void insertAtArray(int[] a,int n,int k) {
        for (int i=a.length;i>(k-1);i--) {
            a[i]=a[i-1];
        }
        a[k-1]=n;
    }
    // Find multiples of three
    public static void divThree(int[] a) {
        System.out.println("Multiples of three");
        for (int i=0;i<a.length;i++) {
            if (a[i]%3==0) {
                System.out.print(a[i]+"  ");
            }
        }
        System.out.println();
    }
    // Program entry point
    public static void main(String[] args) {
        int[] a= new int[10];
        Test no=new Test();
        Scanner sc= new Scanner(System.in);
        while(true) {
            no.notic();
            int k=sc.nextInt();
            switch(k) {
            case 0:{
                System.out.println("Exiting.");
                break;
            }
            case 1: {// Read the initial values
                Test.insertData(a);
            }
            case 2:{// Show all values
                Test.showData(a, a.length);
            }
            case 3: {// Insert at a position
                System.out.println("Enter the value to insert.");
                int n=sc.nextInt();
                System.out.println("Enter the position for the new value.");
                int m=sc.nextInt();
                Test.insertAtArray(a,n,m);
            }
            case 4: {// Find multiples of three
                Test.divThree(a);
            }
            default:{
                System.out.println("Enter an integer from 0 to 4.");
                System.out.println();
            }

            }

            }
        }
}
```
