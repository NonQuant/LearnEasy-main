from django.contrib import admin
from lessons.models import Grade, Subject, SubjectGrade, Topic


@admin.register(Topic)
class TopicAdmin(admin.ModelAdmin):
    model = Topic

    list_display = ('topic', 'slug', 'subject_grade', 'content', 'relative_url',)
    readonly_fields = ('slug', 'content', 'relative_url')
    list_filter = ('subject_grade',)
    search_fields = ('topic', 'slug', 'subject_grade__name',)


class TopicInline(admin.TabularInline):
    model = Topic
    readonly_fields = ('slug',)


@admin.register(SubjectGrade)
class SubjectGradeAdmin(admin.ModelAdmin):
    inlines = (TopicInline,)

    list_display = ('name', 'slug',)
    readonly_fields = ('name', 'slug')
    list_filter = ('subject', 'grade_year',)
    search_fields = ('name',)
    ordering = ('name',)


class SubjectGradeInline(admin.TabularInline):
    model = SubjectGrade
    readonly_fields = ('slug',)


@admin.register(Grade)
class GradeAdmin(admin.ModelAdmin):
    inlines = (SubjectGradeInline,)

    list_display = ('grade_year', 'slug',)
    readonly_fields = ('slug',)
    search_fields = ('grade_year',)
    ordering = ('grade_year',)

    def has_add_permission(self, request):
        return False

    def has_change_permission(self, request, obj=None):
        return False


@admin.register(Subject)
class SubjectAdmin(admin.ModelAdmin):
    inlines = (SubjectGradeInline,)

    list_display = ('subject_type', 'slug',)
    readonly_fields = ('slug',)
    search_fields = ('subject_type',)
    ordering = ('subject_type',)

    def has_add_permission(self, request):
        return False

    def has_change_permission(self, request, obj=None):
        return False


def get_app_list(self, request):
    """
    Return a sorted list of all the installed apps that have been
    registered in this site.
    """
    # Retrieve the original list
    app_dict = self._build_app_dict(request)
    app_list = sorted(app_dict.values(), key=lambda x: x['name'].lower())

    # Define a dictionary to customize the order of models within each app
    model_ordering = {
        'lessons': {
            Subject._meta.verbose_name_plural: 1,
            Grade._meta.verbose_name_plural: 2,
            SubjectGrade._meta.verbose_name_plural: 3,
            Topic._meta.verbose_name_plural: 4,
        },
    }

    # Sort the models customably within each app.
    for app in app_list:
        app_label = app["app_label"]
        if app_label in model_ordering:
            ordering = model_ordering[app_label]
            app['models'].sort(key=lambda x: ordering[x['name']])

    return app_list


admin.AdminSite.get_app_list = get_app_list
