from rest_framework import permissions

class isOwnerOrReadOnly(permissions.BasePermission):
    """
    custom permission that only allow owners of the object to edit it 
    """

    def has_object_permission(self, request, view, obj):
        if (request.method in permissions.SAFE_METHODS):
            return True
        return obj.prof_name == request.user
    

class isAdminOrReadOnly(permissions.BasePermission):
    """
    custom permission that only allow owners of the object to edit it 
    """

    def has_object_permission(self, request, view, obj):
        if (request.method in permissions.SAFE_METHODS):
            return True
        return obj.prof_name == 'admin'