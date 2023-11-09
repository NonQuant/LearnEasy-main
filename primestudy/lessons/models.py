from core.models import SlugModel
from django.db import models
from slugify import slugify


class Subject(SlugModel):
    class SubjectType(models.TextChoices):
        MATH = 'Математика', 'Математика'
        PHYSICS = 'Физика', 'Физика'
        COMPUTER_SCIENCE = 'Информатика', 'Информатика'

    subject_type = models.CharField(
        max_length=20,
        choices=SubjectType.choices,
        verbose_name='Название предмета',
    )

    def __str__(self):
        return self.subject_type

    def get_slug_text(self):
        return self.subject_type

    class Meta:
        verbose_name = 'Предмет'
        verbose_name_plural = 'Предметы'


class Grade(SlugModel):
    class GradeYear(models.TextChoices):
        SEVENTH = '7 класс', '7 класс'
        EIGHTH = '8 класс', '8 класс'
        NINTH = '9 класс', '9 класс'
        TENTH = '10 класс', '10 класс'
        ELEVENTH = '11 класс', '11 класс'
        TWELFTH = '12 класс', '12 класс'

    grade_year = models.CharField(
        max_length=8,
        choices=GradeYear.choices,
        verbose_name='Год обучения',
    )

    def __str__(self):
        return self.grade_year

    def get_slug_text(self):
        return self.grade_year

    class Meta:
        verbose_name = 'Класс'
        verbose_name_plural = 'Классы'


class SubjectGrade(SlugModel):
    name = models.CharField(max_length=100, verbose_name='Предмет для уч. года')
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, verbose_name='Предмет')
    grade_year = models.ForeignKey(Grade, on_delete=models.CASCADE, verbose_name='Класс')

    def save(self, *args, **kwargs):
        self.name = str(self)
        super().save(*args, **kwargs)

    def __str__(self):
        return f'{self.subject} {self.grade_year}'

    def get_slug_text(self):
        return str(self)

    class Meta:
        verbose_name = 'Предмет для уч. года'
        verbose_name_plural = 'Предметы для уч. года'


class Topic(SlugModel):
    topic = models.CharField(max_length=100, verbose_name='Тема')
    subject_grade = models.ForeignKey(SubjectGrade, on_delete=models.CASCADE, verbose_name='Предмет для уч. года', related_name='topics')

    def __str__(self):
        return self.topic

    def get_slug_text(self):
        return self.topic

    @property
    def content(self):
        if not self.slug:
            return ""
        return f'{self.slug}.html'

    @property
    def relative_url(self):
        return f'{self.subject_grade.slug}/{self.slug}'

    class Meta:
        verbose_name = 'Тема'
        verbose_name_plural = 'Темы'
