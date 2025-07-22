from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, ExpenseViewSet, MonthlyBudgetViewSet

router = DefaultRouter()
router.register(r'categories', CategoryViewSet, basename='category')
router.register(r'expenses', ExpenseViewSet, basename='expense')
router.register(r'budgets', MonthlyBudgetViewSet, basename='budget')

urlpatterns = [
    path('', include(router.urls)),
]