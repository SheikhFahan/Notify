from django.contrib import admin

from .models import Professor, Note, SubCode, Assignment, QuestionPaper

admin.site.register(Professor)
admin.site.register(Note)
admin.site.register(SubCode)
admin.site.register(QuestionPaper)
admin.site.register(Assignment)

