from rest_framework import serializers

from .models import Note

class NoteSerializers(serializers.ModelSerializer):
    prof_name = serializers.SerializerMethodField(read_only = True)

    class Meta:
        model = Note 
        fields = [
            'name',
            'prof_name',
            'sub_code',
            'ideal_index',
            'upload_date',
            'note',
            'visible'
        ]

    def get_prof_name(self, obj):
        return obj.prof_name()