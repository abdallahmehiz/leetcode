#include <stdlib.h>

// Definition for singly-linked list.
struct ListNode
{
  int val;
  struct ListNode *next;
};
// i finished this at 3 am in the morning iirc, i dont remember how it works
struct ListNode *mergeTwoLists(struct ListNode *list1, struct ListNode *list2)
{
  if (list1 == NULL)
    return list2;
  if (list2 == NULL)
    return list1;

  struct ListNode *merged = NULL;
  struct ListNode *current = NULL;

  // Merge both lists
  if (list1->val <= list2->val)
  {
    merged = list1;
    list1 = list1->next;
  }
  else
  {
    merged = list2;
    list2 = list2->next;
  }

  current = merged;

  while (list1 != NULL && list2 != NULL)
  {
    if (list1->val <= list2->val)
    {
      current->next = list1;
      list1 = list1->next;
    }
    else
    {
      current->next = list2;
      list2 = list2->next;
    }
    current = current->next;
  }

  if (list1 != NULL)
    current->next = list1;
  else
    current->next = list2;

  return merged;
}