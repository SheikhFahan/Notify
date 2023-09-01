from django.contrib.auth.models import User, Group
 
from rest_framework import serializers

from pdf.models import Professor

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password']
        extra_kwargs = {'password' : {
            'write_only': True
        }}

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        group= Group.objects.get(name = 'professors')
        user.groups.add(group)
        Professor.objects.create(
            user = user,
            name = user.username
        )
        return user