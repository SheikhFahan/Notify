from rest_framework import serializers


from .models import Note , SubCode, Professor, Assignment, QuestionPaper

class NoteSerializers(serializers.ModelSerializer):
    prof_name = serializers.SerializerMethodField(read_only = True)

    class Meta:
        model = Note 
        fields = [
            'pk',
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

class AssignmentSerializers(serializers.ModelSerializer):
    prof_name = serializers.SerializerMethodField(read_only = True)

    class Meta:
        model = Assignment 
        fields = [
            'pk',
            'name',
            'prof_name',
            'sub_code',
            'length',
            'assignment',
            'visible',
            'l_submission'
        ]

    def get_prof_name(self, obj):
        return obj.prof_name()

# for question papers
class QPSerializers(serializers.ModelSerializer):
    class Meta:
        model = QuestionPaper 
        fields = [
            'pk',
            'name',
            'prof_name',
            'sub_code',
            'date',
            'questionPaper',
        ]

    def get_prof_name(self, obj):
        return obj.prof_name()
    

class SubCodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubCode
        fields = [
            'pk'
            'sub_code'
        ]
    

class ProfessorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Professor
        fields = [
            'profile_pic',
            'name'
            'salutation',
            'designation',
            'department',
            'gender',
            'email',
            'description'
        ]
